const {check, validationResult} = require('express-validator');

exports.validateTestimonialToCreate = [

  check('name').not().isEmpty().withMessage('El campo "name" es obligatorio'),
  check('role').not().isEmpty().withMessage('El campo "role" es obligatorio'),
  check('testimony').not().isEmpty().withMessage('El campo "testimonial" es obligatorio'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
      next();
  },

];