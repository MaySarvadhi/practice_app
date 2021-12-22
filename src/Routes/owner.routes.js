const express = require("express");
const END_POINTS = require("../utils/endPoints");
const OwnerRoutes = express.Router();
const OwnerController = require("../controllers/owner.controllers");

OwnerRoutes.post(END_POINTS.ADD_OWNER, OwnerController.create);
module.exports = OwnerRoutes;
