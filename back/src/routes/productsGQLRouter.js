const express = require('express');
const router = express.Router();

const productsGQLController = require('../controllers/productsGQLController');
const {productsFieldsValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', productsGQLController.getProducts);
router.post('/',  productsFieldsValidator, generalValidation, productsGQLController.createProduct);
router.put('/', productsFieldsValidator, generalValidation, productsGQLController.updateProduct);
router.delete('/', productsGQLController.deleteProduct);

module.exports = router;