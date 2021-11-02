const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index')
const userRouter = require('./user/index')
const mintRouter = require('./mint/index')
const shipRouter = require('./ship/index')

router.use('/', mainRouter)
router.use('/user', userRouter)
router.use('/mint', mintRouter)
router.use('/ship',shipRouter)

module.exports = router