const express = require("express");
const END_POINT = require("../utils/endPoints");
const UserRouter = express.Router();
const UserController = require("../controllers/user.controllers");
const multer = require("multer");

UserRouter.post(END_POINT.ADD_USER, multer().none(), UserController.create);
UserRouter.post(END_POINT.LOGIN, multer().none(), UserController.login);

module.exports = UserRouter;
