const Goods = require('../controllers/goods')
var express = require('express');
var router = express.Router();
const Auth = require('../middleware/auth')

/* GET users listing. */
router.get('/',Goods.viewAll)
router.get('/:id',Auth.admin,Goods.findOne)
router.post('/',Auth.admin,Goods.create)   
router.put('/:id',Auth.admin,Goods.update)
router.delete('/:id',Auth.admin,Goods.delete)

module.exports = router;

