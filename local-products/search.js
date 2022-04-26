const isProdInRange = (prodLocation, consumerLocation) => {
  let distance = prodLocation - consumerLocation; 
  return (distance >= 0 && distance < 50) || (distance <= 0 && distance > -50); 
};

const searchProducts = (productsCollection, filters) => {
  let products = productsCollection.getAllProducts();

  return products.filter(prod => isProdInRange(prod.location, filters.consumerLocation));
};

module.exports = searchProducts;