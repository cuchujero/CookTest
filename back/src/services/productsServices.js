const {resolvers} = require('../graphql/resolver'); 

const services = {

    getProducts: (productId) => {
        return productId? resolvers.getProduct(productId) : resolvers.getAllProducts();
    },
    
    createProduct: async (productData) => {
        const newProduct = resolvers.createProduct(productData);
        return {code: 200, message: 'product created', data: newProduct};
    },

    updateProduct: async (productData) => {
        const productUpdated = resolvers.updateProduct(productData);
        return {code: 200, message: 'product updated', data: productUpdated};
    },

    deleteProduct: async (productData) => {
        resolvers.deleteProduct(productData);
        return {code:200, message: 'product deleted', data: productData};
    }
      
}


module.exports = services;