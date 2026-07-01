import mongoose from 'mongoose'
import { type } from 'os'

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
    isActive : {
        type : Boolean,
        default : true
    },
    qrImage : {
        type : String
    }
})

const tableModel = mongoose.model('table',tableSchema)
export default tableModel