const fs = require('fs'); 

export const resolvers = {
     hello: () => {
      return "Hello, GraphQL!";
    },
    getAllProducts: () => {
      try {
        let products = fs.readFileSync(__dirname+'/../data/products.json', 'utf-8');
        products=JSON.parse(products);       
        products = products.filter(function(element: any){ return element.deletedAt===null });
        return products;
      } catch (error) {
        console.error('Error reading products JSON file:', error);
        return [];
      }
    },
    getProduct: (id: any) => {
      try {
        let products = fs.readFileSync(__dirname+'/../data/products.json', 'utf-8');
        products=JSON.parse(products);
        let productFoundIndex = products.findIndex((product: any) => product.id === parseInt(id.id));
        return productFoundIndex!=-1? products[productFoundIndex] : null;
      } catch (error) {
        console.error('Error reading products JSON file:', error);
        return [];
      }
    },
    createProduct: (productData: any) => {
      const products = fs.readFileSync(__dirname+'/../data/products.json', 'utf-8');
      const product = {
        id: products[products.length-1].id, 
        ...productData,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        deletedAt: null,
      };
      products.push(product);
      fs.writeFileSync(__dirname+'/../data/products.json', JSON.stringify(products, null, 2), 'utf-8');
      return product;
    },
    updateProduct: (productData: any) => {
      const products = JSON.parse(fs.readFileSync(__dirname+'/../data/products.json', 'utf-8'));
      const productIndex = products.findIndex((product: any) => product.id === productData.id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      const updatedProduct = {
        ...products[productIndex],
        ...productData,
        updatedAt: new Date().toISOString(),
      };
      products[productIndex] = updatedProduct;
      fs.writeFileSync(__dirname+'/../data/products.json', JSON.stringify(products, null, 2), 'utf-8');
      return updatedProduct;
    },
    deleteProduct: (productData: any) => {
      const products = JSON.parse(fs.readFileSync(__dirname+'/../data/products.json', 'utf-8'));
      const productIndex = products.findIndex((product: any) => product.id === productData.id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      products[productIndex].deletedAt = new Date().toISOString();
      fs.writeFileSync(__dirname+'/../data/products.json', JSON.stringify(products, null, 2), 'utf-8');
      return productData.id;
    },
};
