
const express = require('express');
const router = express.Router();
const productsGQLRouter = require('./productsGQLRouter'); 

router.use('/products', productsGQLRouter); 

module.exports = router;
