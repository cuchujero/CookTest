const axios = require('axios');
const {queries, mutations} = require('../graphql/queries/productsQueries');
const serverURL = 'http://localhost:3000/graphql';

const services = {

    getProducts: async (reqQuery,productId) => {
        let query =  productId? queries.getProduct(productId) :  queries.getAllProducts;
        try {
            let response = await axios.post(serverURL,{query});
            if (reqQuery.createdAt){
                response = response.data.data.getAllProducts.filter(function(element){return (element.createdAt.substring(5, 10))===reqQuery.createdAt})
            }  
            else{
                response = response.data.data.getAllProducts;
            }
            return response;
        } catch (error) {
            console.error('GraphQL request failed:', error);
        }
    },
    
    createProduct: async (productData) => {
        const query = mutations.createProduct(productData);
        try {
            const response = await axios.post(serverURL,{query});
            return {code: 200, message: 'product created', data: response.data};
        } catch (error) {
            console.error('GraphQL request failed:', error);
        }
    },

    updateProduct: async (productData) => {
        const query = mutations.updateProduct(productData);
        try {
            const response = await axios.post(serverURL,{query});
            return {code: 200, message: 'product updated', data: response.data};
        } catch (error) {
            console.error('GraphQL request failed:', error);
        }       
    },

    deleteProduct: async (productData) => {
        const query = mutations.deleteProduct(productData);
        try {
            const response = await axios.post(serverURL,{query});
            return {code:200, message: 'product deleted', data: response.data};
        } catch (error) {
            console.error('GraphQL request failed:', error);
        }
    }
      
}


module.exports = services;