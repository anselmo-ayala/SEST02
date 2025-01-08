const express = require("express");
const app = express();
const port = 3000;
const products = require("./products");
const cartItems = require("./cart");

// app.get()
// app.post()
// app.put()
// app.delete()

// This will return products array and cartItems array
// console.log("Products:", products)
// console.log("Cart:", cartItems)

// .get(Route/URL, Callback(Route Handler))
app.get("/products", (request, response) => {
  // Status Code 200: Successful
  response.status(200).json(products);

  // Route Parameter: placeholder
  app.get("/products/:productID", (request, response) => {
    // Check: int.parse
    const productID = parseInt(request.params.productID);
    // create a test condition, the first element passed the test condition will be return
    const product = products.find(
      (productObject) => productObject.id === productID
    );
    if (product) {
      // If there is a match, return the product Object.
      response.json(product);
    } else {
      // Return an error and tell the user the product is not found.
      response.status(404).json({ message: "Product not found" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});

// Run the Express app
// 1. Open "/shopping-cart-api" in the terminal.
// 2. node "name of main file.(app.js)"
// 3. Restart the server everytime there is a change.
// Nodemon
// 1. Open "/shopping-cart-api" in the terminal.
// 2. nodemon "name of main file.(app.js)"
// 3. This will automatically refresh the server everytime there is a change.
