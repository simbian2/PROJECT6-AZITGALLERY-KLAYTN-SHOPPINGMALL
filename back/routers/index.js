const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index')
const userRouter = require('./user/index')
const mintRouter = require('./mint/index')
const shipRouter = require('./ship/index')
const itemRouter = require('./item/index')
const typeRouter = require('./type/index')

router.use('/', mainRouter)
router.use('/user', userRouter)
router.use('/mint', mintRouter)
router.use('/ship',shipRouter)
router.use('/item',itemRouter)
router.use('/type',typeRouter)

module.exports = router