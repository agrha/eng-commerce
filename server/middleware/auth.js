const jwt = require ('jsonwebtoken')

class Auth {
  static admin(req,res,next){
    let token = req.headers.token
    jwt.verify(token,'secret key',function(err,decoded){
      if(decoded){
        if(decoded.role === 'admin'){
          next()
        } else {
          res.status(403).json({
            message:'kamu bukan admin'
          })
        }
      } else {
        res.status(403).json({
          message:'kamu belum login'
        })
      }
    })
  }
}

module.exports = Auth