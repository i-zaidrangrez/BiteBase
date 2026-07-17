import express from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer'
import { generateAccessToken, generateRefreshToken } from "../utils/tokens.js";
import { matchedData } from "express-validator";
import registerTemplate from "../service/tamplates/registerTemplate.js";
import transporter from "../service/emailService.js";
import sendingResetLink from "../service/tamplates/sendingResetLink.js";

export async function registerController(req, res) {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "All fields are Required",
      });
    }
    const isAlreadyExist = await userModel.findOne({ email });
    if (isAlreadyExist) {
      return res.status(400).json({
        message: "User Already Exist Please Login",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      passwordHash,
      phone,
    });
    const refreshToken = generateRefreshToken({id : user._id , name: user.name , email : user.email , role : user.role})
    user.refreshToken = refreshToken;
    user.refreshTokenExpiryTime = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    );
    await user.save();
    const accessToken = generateAccessToken({id : user._id , name: user.name , email : user.email , role : user.role})
    res.cookie("accessToken", accessToken);

      const info = await transporter.sendMail({
        from: 'zaidrangrez.me@gmail.com', // sender address
        to: user.email, // list of recipients
        subject: "Registeration", // subject line
        text: registerTemplate(user.name , "Bitebase")
      });
    
      console.log("Message sent: %s", info.messageId);
      // Preview URL is only available when using an Ethereal test account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role : user.role,
        phone : user.phone,
        refreshToken,
        accessToken,
      },
    });
  } catch (error) {
    console.log(`error ${error}`);
  }
}

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are Required",
      });
    }
    const user = await userModel.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({
        message: `user doesn't exist with this email Please Register`,
      });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password is Incorrect",
      });
    }
    const refreshToken = generateRefreshToken({id : user._id , name: user.name , email : user.email , role : user.role})
    user.refreshToken = refreshToken
    user.refreshTokenExpiryTime = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    );
    user.lastLogin = new Date(Date.now())
    await user.save()
    const accessToken = generateAccessToken({id : user._id , name: user.name , email : user.email , role : user.role})
    res.cookie("accessToken", accessToken);
    return res.status(200).json({
      message: "Login SuccessFully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role : user.role,
        refreshToken,
        accessToken,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateUser(req,res) {
  try {
    const data = matchedData(req, { includeOptionals: true });
    const user = req.user
    if(!user){
      return res.status(200).json({
        message : "Please Login first"
      })
    }
    const newUser = await userModel.findByIdAndUpdate( user._id,data,{new : true})
    return res.status(200).json({
      message : "User Update success"
    })    
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
  
}

export async function deActivateUser(req,res) {
  try {
    const user = req.user;
    user.isActive = false
    await user.save()
    return res.status(200).json({
      message : "User Deactivated"
    })
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function deleteUser(req,res) {
  try {
    const user = req.user;
  
    if(!user){
      return res.status(401).json({
        message : "Please Login First"
      })
    }
    await userModel.findOneAndDelete(user._id)
    return res.status(200).json({
      message : "User Deleted"
    })
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function searchAccount(req,res) {
 try {
   const {email} = req.body;
   const user = await userModel.findOne({email})
   if(!user){
     return res.status(404).json({
       message : "Account not found"
     })
   }
   const resetLink = `http://localhost:5173/findAccount`
    const info = await transporter.sendMail({
         from: 'zaidrangrez.me@gmail.com', // sender address
         to: user.email, // list of recipients
         subject: "Reset Your Password", // subject line
         text: sendingResetLink(user.name , "Bitebase", resetLink)
       });
     
       console.log("Message sent: %s", info.messageId);
       // Preview URL is only available when using an Ethereal test account
       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 
       return res.status(400).json({
         message : "Email sent"
       })
 } catch (error) {
  return res.status(500).json({
    message : error.message
  })
 }
  
}