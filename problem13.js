// Multi-layer discount price calculation



const shoppingCart = [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 20, quantity: 6 },
    { name: "Product C", price: 5, quantity: 12 }
];

function calculateTotalCostWithDiscounts(cart) {
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const basePrice = product.price;
        const quantity = product.quantity;

        let discountRate = 0;

        // Apply discounts on quantity
        if (quantity >= 5 && quantity < 10) {
            discountRate = 0.1; // 10% discount
        } else if (quantity >= 10) {
            discountRate = 0.2; // 20% discount
        }

        const discountedPrice = basePrice * (1 - discountRate);
        totalCost += discountedPrice * quantity;
    }

    return totalCost;
}


const totalCostWithDiscounts = calculateTotalCostWithDiscounts(shoppingCart);
console.log("Total cost with discounts:", totalCostWithDiscounts);
