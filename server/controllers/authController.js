const auth = require("../config/authUtils");
const userDB = require("../models/userQueries");

async function createNewUser(req, res, next) {
  // hash password
  try {
    const { username, password } = req.body;
    const existingUser = await userDB.findUserByUsername(username);
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists." });
    }
    const hashedPassword = await auth.hashPassword(password);

    // push into database, then give user JWT
    const user = await userDB.createNewUser(
      username,
      hashedPassword
    );
    const jwt = auth.issueJWT(user);

    // most secure way to send JWT, make sure Bearer prefix is not added
    res.cookie("token", jwt.token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    });

    res.status(200).json({
      success: true,
      user: user,
      message: "User created. Auto login...",
    });
  } catch (err) {
    next(err);
  }
}

async function loginExistingUser(req, res, next) {
  try {
    const {username, password} = req.body
    const user = await userDB.findUserByUsername(username);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username." });
    }

    // assume user is logged out, so they do not have a JWT yet
    const result = await auth.compareHashes(password, user.password);

    if (result) {
      const jwt = auth.issueJWT(user);
      res.cookie("token", jwt.token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 8 * 60 * 60 * 1000, // 8 hours
      });
      res.status(200).json({
        success: true,
        user: user,
        message: "You've successfully logged in!",
      });
    } else {
      res.status(401).json({ success: false, message: "Incorrect password." });
    }
  } catch (err) {
    next(err);
  }
}

async function logoutUser(req, res, next) {
  // check if cookie exists before clearing
  res.clearCookie("token");
  res.status(200).json({ message: "You have logged out." });
}

module.exports = {
  createNewUser,
  loginExistingUser,
  logoutUser
};
