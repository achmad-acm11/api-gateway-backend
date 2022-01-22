require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const mediaRouter = require("./routes/media");
const userRouter = require("./routes/user");
const refreshTokenRouter = require("./routes/refreshToken");
const mentorRouter = require("./routes/mentor");
const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/media", mediaRouter);
app.use("/user", userRouter);
app.use("/refresh-token", refreshTokenRouter);
app.use("/mentor", mentorRouter);

module.exports = app;
