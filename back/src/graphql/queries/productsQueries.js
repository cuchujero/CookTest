const queries = {
  hello: `{
    hello
  }`,
  getAllProducts: `{
    getAllProducts {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
      deletedAt
    }
  }`,
  getProduct: (id) => `{
    getProduct(id: "${id}") {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
      deletedAt
    }
  }`,
};

const mutations = {
  createProduct: (productData) => `mutation {
    createProduct(
      name: "${productData.name}"
      description: "${productData.description}"
      price: ${productData.price}
      image: "${productData.image}"
    ) {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
      deletedAt
    }
  }`,
  updateProduct: (id, productData) => `mutation {
    updateProduct(
      id: "${id}"
      name: "${productData.name}"
      description: "${productData.description}"
      price: ${productData.price}
      image: "${productData.image}"
    ) {
      id
      name
      description
      price
      image
      createdAt
      updatedAt
      deletedAt
    }
  }`,
  deleteProduct: (id) => `mutation {
    deleteProduct(id: "${id}")
  }`,
};




module.exports = {queries, mutations}