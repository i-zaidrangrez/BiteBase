import express from 'express'
import { addToCart, clearCart, decreaseQuantity, getCart, increaseQuantity, removeItemFromCart } from '../controllers/cart.controller.js'

import checkRole from '../middlewares/checkRole.js'

const router = express.Router()

router.post('/addtocart',addToCart)
router.post('/getcart',getCart)
router.patch('/removeitem',removeItemFromCart)
router.patch('/increasequantity',increaseQuantity)
router.patch('/decreasequantity',decreaseQuantity)
router.patch('/clearcart',clearCart)

export default router