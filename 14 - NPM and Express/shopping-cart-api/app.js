const express = require("express");
const app = express();
const port = 3000;
const products = require("./products");
const cartItems = require("./cart");

// Middleware
app.use(express.json());

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

function generateUniqueId() {
  if (products.length === 0) {
    // No product object inside of the products array.
    return 1;
  }

  const lastProductObject = products[products.length - 1];
  return lastProductObject.id + 1;
}

// .post(Route/URL, Callback(Route Handler))
app.post("/products", (request, response) => {
  // This will return the same value as desctructuring objects.
  // const name = request.body.name
  // const price = request.body.price
  const { name, price } = request.body;
  if (!name || !price) {
    return response.status(400).json({ message: "Name and price is required" });
  }
  const newProduct = {
    id: generateUniqueId(),
    name,
    price,
  };
  products.push(newProduct);
  response.status(201).json({ message: "Product added to the product list." });
});

// .put(Route/URL, Callback(Route Handler))
app.put("/products/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);
  const { name, price } = request.body;
  if (!name || !price) {
    return response.status(400).json({ message: "Name and price is required" });
  }
  const product = products.find(
    (productObject) => productObject.id === productId
  );
  if (product) {
    product.name = name;
    product.price = price;
    response.status(200).json({ message: "Product updated successfully." });
  } else {
    response.status(404).json({ message: "Product not found" });
  }
});

app.delete("/products/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);

  const productIndex = products.findIndex(
    (productObject) => productObject.id === productId
  );
  if (productIndex !== -1) {
    // .splice(start, deleteCount?, element/s)
    products.splice(productIndex, 1);
    response.status(200).json({ message: "Product deleted successfully" });
  } else {
    response.status(404).json({ message: "Product not found" });
  }
});

// 1. Add a new product Object to the cartItems array.
// 2. Delete a product Object from the cartItems array.

// === Cart Section Start ===

// Display /cart endpoint
app.get("/cart", (request, response) => {
  response.status(200).json(cartItems);

  app.get("/cart/:productId", (request, response) => {
    const productId = parseInt(request.params.productId);
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      response.status(200).json(product);
    } else {
      response.status(404).json({ message: "Product not found in cart" });
    }
  });
});

// Create products [Array] in /cart endpoint
// Sample payload
// {
// "products":[
//     {
//         "id": 1,
//         "name": "Laptop",
//         "price": 1000
//     },
//     {
//         "id": 2,
//         "name": "Mobile Phone",
//         "price": 500
//     },
//     {
//         "id": 3,
//         "name": "Mechanical Keyboard",
//         "price": 300
//     }
// ]
// }

/* app.post("/cart", (request, response) => {
  const { products } = request.body;
  if (!products || !Array.isArray(products)) {
    return response.status(400).json({ message: "Products Lists is required" });
  }
  products.forEach((product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (!productExists) {
      cartItems.push(product);
    }
  });
  response.status(201).json({ message: "Products added to cart" });
});
*/

// Create product to /cart endpoint from the productID
app.post("/cart/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);
  const product = products.find(
    (productObject) => productObject.id === productId
  );
  if (!product) {
    return response.status(404).json({ message: "Product not found" });
  }
  const productExists = cartItems.find((item) => item.id === productId);
  if (productExists) {
    return response.status(400).json({ message: "Product already in cart" });
  }
  cartItems.push(product);
  response.status(201).json({ message: "Product added to cart" });
});

// Delete specific productID from /cart endpoint
app.delete("/cart/:productId", (request, response) => {
  const productId = parseInt(request.params.productId);
  const productIndex = cartItems.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cartItems.splice(productIndex, 1);
    response.status(200).json({ message: "Product removed from cart" });
  } else {
    response.status(404).json({ message: "Product not found in cart" });
  }
});

// Delete all product from /cart endpoint
app.delete("/cart", (request, response) => {
  cartItems.length = 0;
  response.status(200).json({ message: "Cart cleared" });
});

// === Cart Section End ===

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
