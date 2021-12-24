const express = require("express");
const END_POINTS = require("../utils/endPoints");
const barberRatingRoutes = express.Router();
const BarberRatingControllers = require("../controllers/barber.rating.controllers");
const Auth = require("../middleware/auth");

barberRatingRoutes.post(
  END_POINTS.RATING,
  Auth,
  BarberRatingControllers.create
);

module.exports = barberRatingRoutes;
