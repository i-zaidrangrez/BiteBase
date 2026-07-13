import express from 'express'
import { addToCart, clearCart, decreaseQuantity, getCart, increaseQuantity, removeItemFromCart } from '../controllers/cart.controller.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import checkRole from '../middlewares/checkRole.js'

const router = express.Router()

router.post('/addtocart', authMiddleware,addToCart)
router.get('/getcart',authMiddleware,getCart)
router.patch('/removeitem',authMiddleware,removeItemFromCart)
router.patch('/increasequantity',authMiddleware,increaseQuantity)
router.patch('/decreasequantity',authMiddleware,decreaseQuantity)
router.patch('/clearcart',authMiddleware,clearCart)

export default router