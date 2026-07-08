import mongoose, { Mongoose } from "mongoose";    
import { type } from "os";
import { ref } from "process";

const cartSchema = mongoose.Schema({
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    items : [{
        menuItemId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'menu'
        },
        quantity:{
            type : Number,
            default : 1
        },
        price : {
            type : Number,
            required : true
        }
    }],
    totalCartPrice : {
        type : Number
    }

})

const cartModel = mongoose.model('cart',cartSchema)
export default cartModel