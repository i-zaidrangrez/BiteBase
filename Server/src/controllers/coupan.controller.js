import coupanModel from "../models/coupan.model.js";

export async function getAllCoupans(req, res) {}

export async function registerCoupan(req, res) {
  // minOrderAmount discountValue description
  try {
    const {
      code,
      discountType,
      maxDiscount,
      validFrom,
      validTo,
      usageLimit,
      usedCount,
      minOrderAmount,
      description,
      discountValue,
    } = req.body;

    if (!code || !discountType) {
      return res.status(401).json({
        message: "code and discountType is Required",
      });
    }

    const isCoupanExist = await coupanModel.findOne({
      code: code.toUpperCase().trim(),
    });
    if (isCoupanExist) {
      return res.status(400).json({
        message: "This Coupan Already Exist",
      });
    }

    const coupan = await coupanModel.create({
      code: code.toUpperCase().trim(),
      discountType,
      maxDiscount,
      validFrom,
      validTo,
      usageLimit,
      usedCount,
      minOrderAmount,
      description,
      minOrderAmount,
      discountValue,
      description,
    });

    return res.status(201).json({
        message : "Coupan Created Successfully",
        coupan
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
