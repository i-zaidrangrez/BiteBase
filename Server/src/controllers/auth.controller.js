import express from 'express'
import userModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function registerController(req,res) {
    const {name,email,password,phone} = req.body
    if(!name || !email || !password || !phone){
        return res.status(400).json({
            message: "All fields are Required"
        })
    }
    const isAlreadyExist = await userModel.findOne({email})
    if(isAlreadyExist){
        return res.status(400).json({
            message : "User Already Exist Please Login"
        })
    }

    const passwordHash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        name,
        email,
        passwordHash,
        phone,
    })
    const refreshToken = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn : "7d"})
    const accessToken = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn : "15m"})
    res.cookie('refreshToken',refreshToken)

    return res.status(201).json({
        message  : "User Registered Successfully",
        user : {
            email,
            name,
            phone,
        },
        refreshToken,
        accessToken
    })

}

export async function loginController(req,res) {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({
            message  :"All fields are Required"
        })
    }
    const user = await userModel.findOne({email})
    const isMatch = await bcrypt.compare(password,user.passwordHash)
    if(!isMatch){
        return res.status(400).json({
            message : "Password is Incorrect"
        })
    }
    if(!user){
        return res.status(400).json({
            message : "User Does Not Exist Please Register"
        })
    }
    const refreshToken = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn : "7d"})
    const accessToken = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn : "15m"})
    res.cookie('refreshToken',refreshToken)
    return res.status(200).json({
        message : "Login SuccessFully",
        user : {
            id : user._id,
            name : user.name,
            email : user.email,
        },
        refreshToken,
        accessToken
    })
}