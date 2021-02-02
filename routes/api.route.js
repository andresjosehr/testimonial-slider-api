const express = require("express");
const apiRoutes = express.Router()
const testimonialRoutes = require("./testimonials.route")

apiRoutes.use("/testimonials", testimonialRoutes);

module.exports = apiRoutes