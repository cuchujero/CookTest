const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const {productsFieldsValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', productsController.getProducts);
router.post('/',  productsFieldsValidator, generalValidation, productsController.createProduct);
router.put('/', productsFieldsValidator, generalValidation, productsController.updateProduct);
router.delete('/', productsController.deleteProduct);

module.exports = router;