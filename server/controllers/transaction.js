const transactionSchema = require('../models/Transaction')

class Transaction {
  static findByUser (req,res) {
    let target = {
      customer_id:req.decoded.id
    }
    transactionSchema.find(target)
    .populate('customers_id')
    .populate('items')
    .then(data=>{
      res.status(200).json({
        message:'list of items:',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static viewAll(req,res){
    transactionSchema.find()
    .populate('customers_id')
    .populate('items')
    .then(data => {
      res.status(200).json({
        message:'all transaction:',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static create(req,res){
    let obj = {
      userId:req.body.userId,
      items:req.body.items,
      price:req.body.price
    }
    transactionSchema.create(obj)
    .then(data=>{
      res.status(200).json({
        message:'create transaction successfully',
        data
      })
    })
    .catch(err=>{
      message:'something went wrong',
      err
    })
  }
}

module.exports = Transaction