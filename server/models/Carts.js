const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = new Schema({
  costumers_id : {type : Schema.Types.ObjectId,ref:'Costumers'},
  items : {
     type : Schema.Types.ObjectId,
     ref:'Items',
  },
  quantity : Number,
  total : Number
},{timestamps : {}})

module.exports = mongoose.model('Carts',cartSchema)
