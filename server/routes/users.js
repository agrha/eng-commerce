var express = require('express');
var router = express.Router();
const User = require('../controllers/users')

/* GET users listing. */
router.get('/',User.viewAll)
router.post('/admin', User.createAdmin)
router.post('/signup',User.signup)
router.post('/signin',User.signin)
router.delete('/:id',User.delete)
module.exports = router;
