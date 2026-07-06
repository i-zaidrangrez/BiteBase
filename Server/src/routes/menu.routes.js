import express from 'express'
import upload from '../middlewares/upload.js'
import { createMenuItem, deleteItem, getItem, getItems, updateItem } from '../controllers/menu.controller.js'

const router = express.Router()
router.post('/menu',upload.single('image'),createMenuItem)
router.get('/getmenu',getItems)
router.get('/getitem/:id',getItem)
router.delete('/deleteitem/:id',deleteItem)
router.patch('/updateitem/:id',upload.single('image'),updateItem)

export default router