import mongoose from 'mongoose'


const coupanSchema = new mongoose.Schema({
    code : {
        type : String
    },
    discountType : {
        type : String,
        enum : ['percentage','fixed']
    },
    maxDiscount : {
        type : Number
    },
    validTo : {
        type : Date
    },
    validFrom : {
        type : Date
    },
    isActive: {
        type : Boolean,
        default : true
    },
    isFirstOrder : {
        type : Boolean,
        default : null
    },
    usageLimit : {
        type : Number
    },
    usedCount : {
        type : Number
    },
    minOrderAmount : {
        type : Number
    },
    discountValue : {
        type : Number,
        default : 0
    },
    description : {
        type : String
    }
})


const coupanModel = mongoose.model('coupan',coupanSchema)

export default coupanModel