const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/selleradmin', controller.Seller_Admin)

router.post('/AddUser', controller.AddUser)

router.post('/signup',controller.Signup_post)

router.post('/addressdbcheck',controller.Address_Db_check)

module.exports = router