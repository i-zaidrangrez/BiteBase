import cartModel from "../models/cart.model.js"
import menuModel from "../models/menu.model.js"

export async function addToCart(req,res ) {
    try {
        const {userId , menuItemId , quantity = 1} = req.body

        let cart = await cartModel.findOne({userId})
        if(!cart){
            cart = new cartModel({
                userId,
                items : [],
                totalCartPrice : 0
            })
        }
        await cart.save()
        const menu = await menuModel.findById(menuItemId)
        if(!menu){
            return res.status(400).json({
                message : "Menu Item is not found"
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}