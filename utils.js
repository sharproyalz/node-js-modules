function calculateTotalPrice(cart, discountPercent = 0) {
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });
    let discountAmount = (totalPrice * discountPercent) / 100;
    let discountedPrice = totalPrice - discountAmount;
    return { totalPrice, discountAmount, discountedPrice };
}

module.exports = { calculateTotalPrice };
