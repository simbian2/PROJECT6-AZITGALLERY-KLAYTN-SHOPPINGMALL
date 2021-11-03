const express = require('express')
const router = express.Router()
const controller = require('./item.controller')

router.get('/uploadpics', controller.upload_pics)
router.post('/uploadpics', controller.get_uploaded_pics)
router.post('/uploaddata', controller.upload_data)



module.exports = router