import express from 'express'
import { registerCoupan } from '../controllers/coupan.controller.js'

const router = express.Router()

router.post('/create',registerCoupan)

export default router