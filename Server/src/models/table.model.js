import mongoose from 'mongoose'

const tableSchema = mongoose.Schema({
    tableNumber : {
        type : Number,
        required: true,
        unique : true
    },
    capacity : {
        type : Number,
        required : true
    },
    qrSlug : {
        type : String,
        required : true
    },
    qrCodeURL : {
        type : String,
        required : true
    },
    qrImage : {
        type : String
    }
})

const tableModel = mongoose.model('table',tableSchema)
export default tableModel