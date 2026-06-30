import tableModel from "../models/table.model.js";
import crypto from "crypto";
import QRCode from "qrcode";

export async function createTable(req, res) {
  const { tableNumber, capacity } = req.body;
  if(!tableNumber || !capacity){
    res.status(400).json({
        message : "Please Provide Table no. and capacity"
    })
  }

  const qrSlug = crypto.randomBytes(6).toString("hex");
  if(!qrSlug){
    res.status(500).json({
        message : "Something Went Wrong! Try Again"
    })
  }
  const qrCodeURL = `http://localhost:5173/scan-qr?qr=${qrSlug}`;
  if(!qrCodeURL){
    res.status(500).json({
        message : "Something Went Wrong! Try Again"
    })
  }

  async function generateQR() {
    try {
      const qrImageRaw = await QRCode.toDataURL(qrCodeURL);
      return qrImageRaw;
    } catch (err) {
      console.error(err);
    }
  }

  const qrImage = await generateQR()
  if(!qrImage){
    res.status(500).json({
        message : "Something Went Wrong! Try Again"
    })
  }

  const table = await tableModel.create({
    tableNumber,
    capacity,
    qrSlug,
    qrCodeURL,
    qrImage
  })
  res.status(201).json({
    message : "Table Created",
    table
  })
}
