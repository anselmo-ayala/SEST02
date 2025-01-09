const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  // Add more products as needed
];

let cart = [];

// Add a product to the cart
app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find((p) => p.id === productId);

  if (product) {
    const cartItem = cart.find((item) => item.product.id === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    res.status(200).json({ message: "Product added to cart", cart });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete a product from the cart
app.delete("/cart/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const cartIndex = cart.findIndex((item) => item.product.id === productId);

  if (cartIndex !== -1) {
    cart.splice(cartIndex, 1);
    res.status(200).json({ message: "Product removed from cart", cart });
  } else {
    res.status(404).json({ message: "Product not found in cart" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
