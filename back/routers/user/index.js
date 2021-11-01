const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

// /user
router.post('/SellerAdmin', controller.SellerAdmin)

router.post('/AddUser', controller.AddUser)


module.exports = router