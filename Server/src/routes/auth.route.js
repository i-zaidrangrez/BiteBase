import express from 'express'
import { loginController, registerController} from '../controllers/auth.controller.js'
import { handleValidation } from '../middlewares/validationMiddleware.js'
import { validateRegistration } from '../validation/validation.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import checkRole from '../middlewares/checkRole.js'

const router = express.Router()

router.post('/register',validateRegistration ,handleValidation, registerController)
router.post('/login',loginController)
router.get('/menu',authMiddleware,checkRole,(req,res)=>{res.send(req.user)})

export default router