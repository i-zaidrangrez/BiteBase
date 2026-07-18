const registerTemplate = (customerName, restaurantName) => {
  return `Hi ${customerName},

Welcome to ${restaurantName}! 🍔

As a thank you for joining us, here's a special welcome gift just for you.

🎁 Use Code: WELCOME10

💸 Get 10% OFF on your first order.

🍟 Explore our delicious menu:
https://bitebase.com/menu

━━━━━━━━━━━━━━━━━━━━━━

Why BiteBase?

✓ Freshly prepared meals
✓ Fast & reliable delivery
✓ Easy online ordering
✓ Great food at great prices

━━━━━━━━━━━━━━━━━━━━━━

This offer is valid for a limited time.

Happy eating! 🍕

— Team ${restaurantName}
`;
};

export default registerTemplate;