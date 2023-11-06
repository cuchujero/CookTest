const {body} = require('express-validator'); 

const userFieldsValidator = [
  body('userName', 'Field can not be empthy').not().isEmpty(),
  body('userName', 'Field incorrect').isLength({min: 3},{max: 26}),
  body('password', 'Field can not be empthy').not().isEmpty(),
  body('password', 'Field incorrect').isLength({min: 3},{max: 26})
]

const productsFieldsValidator = [
  body('name', 'Field can not be empthy').not().isEmpty(),
  body('name', 'Field incorrect').isLength({min: 3},{max: 32}),
  body('description', 'Field can not be empthy').not().isEmpty(),
  body('description', 'Field incorrect').isLength({min: 5},{max: 32}),
  body('price', 'Field can not be empthy').not().isEmpty(),
  body('price', 'Field incorrect').isLength({min: 2},{max: 8}),
]

const IdValidator = [
  body('id', 'id can not be empthy').not().isEmpty(),
  body('id', 'Field incorrect').isInt()
]

module.exports = {userFieldsValidator, productsFieldsValidator, IdValidator};
