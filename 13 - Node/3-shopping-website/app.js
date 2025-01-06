const productsModule = require("./products");
const cartModule = require("./cart");

// Don't prevent the access for the variables.
// console.log(productsModule.products);
// The user can manipulate the variable directly
// productsModule.products[0].price = 10;
// console.log(productsModule.products[0]);

// Check the available product
productsModule.displayProducts();

// Check the cart of the user
cartModule.displayCartItems();

// Add a product to the cart
cartModule.addToCart(productsModule.getProduct(3));
cartModule.addToCart(productsModule.getProduct(2));

// Check the cart of the user
cartModule.displayCartItems();

// Calculate total price of products in the cart
console.log(cartModule.calculateTotal());
