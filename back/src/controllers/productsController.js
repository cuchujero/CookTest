const productsServices = require('../services/productsServices'); 

const controller = {
	getProducts: async (req, res)=> {
		res.json(await productsServices.getProducts(req.params.id));
	},
	createProduct: async (req, res)=> {
		res.json(await productsServices.createProduct(req.body));
	},
	updateProduct: async (req, res)=> {
		res.json(await productsServices.updateProduct(req.body));
	},
	deleteProduct: async (req, res)=> {
		res.json(await productsServices.deleteProduct(req.body));
	},
};

module.exports = controller;