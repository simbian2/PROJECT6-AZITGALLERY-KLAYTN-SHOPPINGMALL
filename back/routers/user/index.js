const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.post('/selleradmin', controller.Seller_Admin)

router.post('/AddUser', controller.AddUser)


module.exports = router