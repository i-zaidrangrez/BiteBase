import nodemailer from 'nodemailer'
import env from 'dotenv'
env.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zaidrangrez.me@gmail.com",
    pass: process.env.APP_PASS // The 16-character App Password
  },
});

export default transporter;