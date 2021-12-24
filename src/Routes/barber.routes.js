const express = require("express");
const END_POINTS = require("../utils/endPoints");
const BarberController = require("../controllers/barber.controllers");
const multer = require("multer");
const BarberRoutes = express.Router();

BarberRoutes.post(
  END_POINTS.ADD_BARBER,
  multer().none(),
  BarberController.create
);
BarberRoutes.get(END_POINTS.GET_BARBER, BarberController.findAll);
module.exports = BarberRoutes;
