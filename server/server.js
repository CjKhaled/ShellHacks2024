require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const passport = require("passport");
const cookieParser = require('cookie-parser')

// todo corsOptions = {origin: frontend link, optionsSuccessStatus: 200}

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/passportConfig')(passport);

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes")
app.use("/", authRouter)
app.use("/", userRouter)

// to-do: error handler

const port = process.env.PORT || 3000
app.listen(port, "0.0.0.0", () => console.log(`server runnning on port ${port}`))
