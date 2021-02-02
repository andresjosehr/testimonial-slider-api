const Testimonial          = require("../Models/Testimonial")
const { validationResult } = require('express-validator');
const testimonialFields    = ["name", "role", "testimony"];

const TestimonialControllers = {


    async get(req, res){

        const testimonials = await Testimonial.find();

        res.json(testimonials)
    },

    async store(req, res){
        const data = {}
        testimonialFields.map(field => data[field] = req.body[field] )

        let newTestimonial = new Testimonial(data);
        newTestimonial = await newTestimonial.save()

        res.status(201).json({message:"Sucefully created", response: newTestimonial});
    },

    async update(req, res){

        const data = {}
        testimonialFields.map(field => data[field] = req.body[field] )

        let TestimonialUpdated = await Testimonial.updateOne({_id: req.params.id}, data);

        res.status(200).json({message:"Sucefully updated", response: TestimonialUpdated});
    },

    async show(req, res){

        let testimonial = await Testimonial.findById(req.params.id);

        res.status(200).json({message: "Succefully requested", response: testimonial});
    },

    async delete(req, res){

        let testimonial = await Testimonial.deleteOne({_id: req.params.id});

        res.status(200).json({message: "Succefully deleted"});
    }

}

module.exports= TestimonialControllers;