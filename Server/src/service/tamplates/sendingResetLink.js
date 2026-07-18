const sendingResetLink = (customerName, restaurantName, resetLink) => {
  return `
  <div style="max-width:600px;margin:auto;padding:30px;font-family:Arial,sans-serif;background:#ffffff;border:1px solid #e5e5e5;border-radius:10px;">
    
    <h2 style="color:#e8691a;">Reset Your Password</h2>

    <p>Hi <strong>${customerName}</strong>,</p>

    <p>
      We received a request to reset the password for your
      <strong>${restaurantName}</strong> account.
    </p>

    <div style="text-align:center;margin:35px 0;">
      <a
        href="${resetLink}"
        style="
          background:#e8691a;
          color:#ffffff;
          text-decoration:none;
          padding:14px 28px;
          border-radius:8px;
          display:inline-block;
          font-weight:bold;
        "
      >
        Reset Password
      </a>
    </div>

    <p><strong>Security Notice</strong></p>

    <ul>
      <li>This link expires in 15 minutes.</li>
      <li>It can only be used once.</li>
      <li>If you didn't request this, you can safely ignore this email.</li>
    </ul>

    <p>
      If the button doesn't work, copy and paste the following link into your browser:
    </p>

    <p>
      <a href="${resetLink}">${resetLink}</a>
    </p>

    <hr />

    <p>Stay safe,<br /><strong>Team ${restaurantName}</strong></p>

  </div>
  `;
};

export default sendingResetLink;