import express from 'express'
import { createTable } from '../controllers/table.controller.js'
const router = express.Router()

router.post('/table',createTable)

export default router