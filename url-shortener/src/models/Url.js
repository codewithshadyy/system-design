

const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({

    originalURL:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        unique:true,
        required:true,
        index:true
    },

    clicks:{
        type:Number,
        default:0
    },

    description:{
        type:Text
    }

},{timestamps:true})


module.exports = mongoose.model("Url". urlSchema)