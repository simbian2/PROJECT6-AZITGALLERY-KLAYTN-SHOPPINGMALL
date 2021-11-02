const express = require('express')
const router = express.Router()
const controller = require('./item.controller')

router.post('/uploadpics', controller.uploadPics)
router.post('/uploaddata', controller.uploadData)
router.get('/s3test', controller.s3test)



module.exports = router