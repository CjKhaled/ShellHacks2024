const express = require("express");
const app = express();
const request = require("supertest");
const authRoutes = require("../routes/authRoutes");
const cookieParser = require("cookie-parser");
const userDB = require("../models/userQueries");
const authUtils = require("../config/authUtils");
const passport = require("passport");

require("../config/passportConfig")(passport);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoutes);

jest.mock("../models/userQueries", () => ({
  createNewUser: jest.fn().mockResolvedValue({
    id: 1,
    userName: "Test",
    password: "hashedPassword",
  }),
  findUserByUsername: jest.fn().mockResolvedValue({
    id: 1,
    userName: "Test",
    password: "hashedPassword",
  }),
}));

jest.mock("../config/authUtils", () => ({
  hashPassword: jest.fn().mockResolvedValue("hashedPassword"),
  issueJWT: jest
    .fn()
    .mockReturnValue({ token: "testToken", expiresIn: 8 * 60 * 60 * 1000 }),
  compareHashes: jest.fn().mockResolvedValue(true),
}));

jest
  .spyOn(passport, "authenticate")
  .mockImplementation((strategy, options, callback) => {
    return (req, res, next) => {
      // Simulate successful authentication
      req.user = {
        id: "test-user-id",
        email: "test@example.com",
      };
      next();
    };
  });

  test("signup functionality works", (done) => {
    request(app)
      .post("/signup")
      .send({
        userName: "TestUser",
        password: "password123",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        // Check response content
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe("User created. Auto login...");

        // Check if JWT cookie is set
        expect(res.headers["set-cookie"]).toBeDefined();
      })
      .end(done);
  });