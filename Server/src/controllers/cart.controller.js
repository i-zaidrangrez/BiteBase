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

        const isItemExist = cart.items.find((Item)=> Item.menuItemId.equals(menu._id))
        if(!isItemExist){
            cart.items.push({menuItemId : menu._id , quantity , price : menu.price})
            await cart.save()
        }else{
            isItemExist.quantity += 1
            await cart.save()
        }

        cart.totalCartPrice = cart.items.reduce((acc,item)=>{
            return acc + (item.quantity*item.price)
        },0)
        await cart.save()
    } catch (error) {
        console.log(error)
    }
}