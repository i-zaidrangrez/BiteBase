const sendingResetLink = (
  customerName,
  restaurantName,
  resetLink
) => {
  return `Hi ${customerName},

We received a request to reset the password for your ${restaurantName} account.

🔐 Reset your password using the link below:

${resetLink}

━━━━━━━━━━━━━━━━━━━━━━

⚠️ Security Notice

• It can only be used once.
• If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.

━━━━━━━━━━━━━━━━━━━━━━

If the link doesn't work, copy and paste it into your browser.

Stay safe,
— Team ${restaurantName}
`;
};


export default sendingResetLink;