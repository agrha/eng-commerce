const Transaction = require('../controllers/transaction')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',Transaction.viewAll)
router.get('/:id',Transaction.findByUser)
router.post('/',Transaction.create)

module.exports = router;

