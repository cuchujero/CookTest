import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Product {
      id: ID!
      name: String!
      description: String
      price: Float!
      image: String
      createdAt: String
      updatedAt: String
      deletedAt: String
  }
    
  type Query {
    hello: String
    getProduct(id: ID!): Product
    getAllProducts: [Product]
  }
  
  type Mutation {
    createProduct(name: String!, description: String, price: Float!, image: String): Product
    updateProduct(id: ID!, name: String, description: String, price: Float, image: String): Product
    deleteProduct(id: ID!): ID
  }
`);
