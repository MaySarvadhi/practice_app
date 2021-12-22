const express = require("express");
const router = express.Router();
const OwnerRoutes = require("./owner.routes");
const SaloonRotes = require("./saloon.routes");
router.use("/owner", OwnerRoutes);
router.use("/saloon", SaloonRotes);
module.exports = router;
