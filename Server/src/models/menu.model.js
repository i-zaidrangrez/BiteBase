import mongoose from 'mongoose'

const menuSchema = mongoose.Schema({
    name : {
        type : String
    },
    Image : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : String
    },
    category : {
        type : String
    },
    isAvailable : {
        type : Boolean
    }
})

const menuModel = mongoose.model('menu',menuSchema)

export default menuModel