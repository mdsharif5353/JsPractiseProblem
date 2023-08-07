// Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 20, quantity: 1 },
    { name: "Product C", price: 5, quantity: 3 }
];

function calculateTotalCost(cart) {
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const price = product.price;
        const quantity = product.quantity;

        totalCost += price * quantity;
    }

    return totalCost;
}

const totalCost = calculateTotalCost(shoppingCart);
console.log("Total cost:", totalCost);