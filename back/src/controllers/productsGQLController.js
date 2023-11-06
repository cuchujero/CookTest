const productsGQLServices = require('../services/productsGQLServices'); 

const controller = {
	getProducts: async (req, res)=> {
		res.json(await productsGQLServices.getProducts(req.query, req.params.id));
	},
	createProduct: async (req, res)=> {
		res.json(await productsGQLServices.createProduct(req.body));
	},
	updateProduct: async (req, res)=> {
		res.json(await productsGQLServices.updateProduct(req.body));
	},
	deleteProduct: async (req, res)=> {
		res.json(await productsGQLServices.deleteProduct(req.body));
	},
};

module.exports = controller;