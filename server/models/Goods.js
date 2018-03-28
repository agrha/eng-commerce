const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let goodSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  image:String,
},{timestamps:true})

module.exports = mongoose.model('Goods',goodSchema)