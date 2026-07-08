import express from 'express'
import { addToCart, clearCart, decreaseQuantity, getCart, increaseQuantity, removeItemFromCart } from '../controllers/cart.controller.js'

const router = express.Router()

router.post('/addtocart',addToCart)
router.get('/getcart',getCart)
router.get('/removeitem',removeItemFromCart)
router.get('/increasequantity',increaseQuantity)
router.get('/decreasequantity',decreaseQuantity)
router.get('/clearcart',clearCart)

export default router