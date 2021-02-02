const express                = require("express")
const testimonialRoutes      = express.Router();
const TestomialController    = require("../controllers/testimonials.controller")
const { validateTestimonialToCreate, } = require('../validations/testimonials.validator');

testimonialRoutes.route("/").get(TestomialController.get)
testimonialRoutes.route("/").post(validateTestimonialToCreate, TestomialController.store)
testimonialRoutes.route("/:id").patch(TestomialController.update)
testimonialRoutes.route("/:id").get(TestomialController.show)
testimonialRoutes.route("/:id").delete(TestomialController.delete)

module.exports = testimonialRoutes