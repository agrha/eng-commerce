const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let goodSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  categoryId:{type:Schema.Types.ObjectId,ref:'Category'},
  price:{
    type:Number,
    required:true
  },
  image:String,
  quantity_on_cart:{
    type:Number
  }
},{timestamps:true})

module.exports = mongoose.model('Goods',goodSchema)