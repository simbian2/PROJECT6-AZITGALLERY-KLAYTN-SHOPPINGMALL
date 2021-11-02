const express = require('express')
const router = express.Router()
const controller = require('./item.controller')

router.get('/uploadpics', controller.uploadPics)
router.post('/uploadpics', controller.getUploadedPics)
router.post('/uploaddata', controller.uploadData)



module.exports = router