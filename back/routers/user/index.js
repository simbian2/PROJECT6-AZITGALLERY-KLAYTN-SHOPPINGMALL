const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/selleradmin', controller.Seller_Admin)


router.post('/signup',controller.Signup_post)

module.exports = router