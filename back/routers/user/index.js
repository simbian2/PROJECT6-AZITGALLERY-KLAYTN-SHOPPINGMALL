const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/selleradmin', controller.Seller_Admin)

router.post('/AddUser', controller.AddUser)

router.post('/signup',controller.Signup_post)

router.post('/addressdbcheck',controller.Address_Db_check)

router.get('/userlist',controller.Userlist_get)

router.post('/selleradminaccess',controller.selleradmin_access)

router.post('/selleradmindeny',controller.selleradmin_deny)

router.post('/selleradminwait',controller.selleradmin_wait)

module.exports = router