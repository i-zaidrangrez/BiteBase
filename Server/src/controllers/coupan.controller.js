export async function getAllCoupans(req,res) {
    
}

export async function registerCoupan(req,res) {
    // minOrderAmount discountValue description 
    try {
        const {code , discountType , maxDiscount , validFrom , validTo , usageLimit , usedCount , minOrderAmount , description } = req.body;
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    } 
}