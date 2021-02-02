const { Schema, model } = require("mongoose");

const TestimonialSchema = new Schema({
    name: String,
    role: String,
    testimony: String   
})

module.exports = model("testimonials", TestimonialSchema)