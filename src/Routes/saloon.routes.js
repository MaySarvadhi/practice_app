const express = require("express");
const formData = require("express-form-data");
const multer = require("multer");
const END_POINTS = require("../utils/endPoints");
const SaloonController = require("../controllers/saloon.controllers");
const SaloonRouter = express.Router();

SaloonRouter.post(
  END_POINTS.ADD_SALOON,
  multer().none(),
  SaloonController.create
);
SaloonRouter.get(END_POINTS.GET_SALOON, SaloonController.findAll);
module.exports = SaloonRouter;
