import tableModel from "../models/table.model.js"
import crypto from 'crypto'

export const session = async (req,res) => {
    const {deviceId , qrSlug} = req.body

    const table = await tableModel.findOne({qrSlug})
    const tableNumber = table.tableNumber
    const sessionToken = crypto.randomBytes(32).toString('hex')
    const ip = req.ip
    const userAgent = req.headers["user-agent"]
    const qrCodeUrl = table.qrCodeURL
    console.log({deviceId,qrSlug,tableNumber,sessionToken,ip,userAgent,qrCodeUrl})
}