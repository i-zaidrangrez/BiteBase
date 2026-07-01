import express from 'express'
import { createTable, getTable } from '../controllers/table.controller.js'
const router = express.Router()

router.post('/table',createTable)
router.get('/scan-qr',getTable)

export default router