
const express = require('express');
const router = express.Router();
// const usersRouter = require('./usersRouter'); 
const productsRouter = require('./productsRouter'); 

// router.use('/users', usersRouter); 
router.use('/products', productsRouter); 

module.exports = router;
