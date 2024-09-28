require('dotenv').config()
const express = require('express')
const app = express()
const passport = require("passport");
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./config/passportConfig')(passport)

const authRouter = require("./routes/authRoutes")
app.use("/", authRouter)

// to-do: error handler

const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`server runnning on port ${port}`))