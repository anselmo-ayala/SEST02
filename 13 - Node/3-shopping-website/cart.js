let cartItems = [];

function addToCart(productObject) {
  cartItems.push(productObject);
}

function displayCartItems() {
  console.log("Cart:", cartItems);
}

function calculateTotal() {
    let total = 0;
    for (let item of cartItems) {
        total += item.price;

    }
    return total;

}

module.exports = {
  addToCart,
  displayCartItems,
  calculateTotal
};
