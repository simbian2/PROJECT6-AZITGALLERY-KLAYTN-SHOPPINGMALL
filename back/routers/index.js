const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index')
const userRouter = require('./user/index')
const mintRouter = require('./mint/index')

router.use('/', mainRouter)
router.use('/user', userRouter)
router.use('/mint', mintRouter)

module.exports = router