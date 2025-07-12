// item: { name: string, price: number, quantity: number }
function calculateSubtotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function applyDiscount(subtotal, discountPercentage) {
  return subtotal - (subtotal * discountPercentage) / 100;
}

function applyTax(amount, taxRate) {
  return amount + (amount * taxRate) / 100;
}

function calculateTotal(cartItems, discountPercentage = 0, taxRate = 0) {
  const subtotal = calculateSubtotal(cartItems);
  const discounted = applyDiscount(subtotal, discountPercentage);
  return applyTax(discounted, taxRate);
}

const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Jeans", price: 1200, quantity: 1 },
];

const total = calculateTotal(cart, 10, 5); // 10% discount, 5% tax
console.log("Final Price:", total);

// Why This Works
// Testable: Each function can be unit tested separately.

// Scalable: Easily add new pricing rules (e.g., promo codes, tiered tax).

// Iterative logic: Uses loops (reduce), not recursion.

// Clean separation of concerns.
