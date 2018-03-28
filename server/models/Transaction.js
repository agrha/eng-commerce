const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
  userId : {type : Schema.Types.ObjectId,ref:'Users'},
  items : [{
     type : Schema.Types.ObjectId,
     ref:'Goods',
  }],
  totalPrice : Number
},{timestamps : true})

module.exports = mongoose.model('Transaction',transactionSchema)
