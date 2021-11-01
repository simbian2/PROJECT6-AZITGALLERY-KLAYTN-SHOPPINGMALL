const express = require('express')
const router = express.Router()
const controller = require('./ship.controller')

router.post('/shipinfo', controller.get_shipinfo)


module.exports = router