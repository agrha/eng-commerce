const goodSchema = require('../models/Goods')

class Goods {
  static viewAll(req,res){
    goodSchema.find()
    .then(data => {
      res.status(200).json({
        message:'list items:',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({message:err})
    })
  }

  static create (req,res){
    let obj = {
      name:req.body.name,
      description:req.body.description,
      price:Number(req.body.price),
      image:req.body.image
    }
    goodSchema.create(obj)
    .then(data=>{
      res.status(200).json({
        message:'good has been created',
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

  static update(req,res){
    let target = {
      _id:req.params.id
    }
    let obj = {
      name:req.body.name,
      description:req.body.description,
      price:Number(req.body.price),
      image:req.body.image
    }
    goodSchema.findOneAndUpdate(target,obj,{new:true})
    .then(data =>{
      res.status(200).json({
        message:'item has been updated'
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static findOne (req,res) {
    let target = {
      _id:req.params.id
    }
    goodSchema.findOne(target)
    .then(data=>{
      res.status(200).json({
        message:'data found',
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

  static delete (req,res){
    let target = {
      _id:req.params.id
    }
    goodSchema.findOneAndRemove(target)
    .then(data=>{
      res.status(200).json({
        message:'goods successfully deleted',
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
}

module.exports = Goods