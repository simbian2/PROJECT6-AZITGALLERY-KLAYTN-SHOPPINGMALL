const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index')
const userRouter = require('./user/index')
const mintRouter = require('./mint/index')
const shipRouter = require('./ship/index')
<<<<<<< HEAD
const itemRouter = require('./item/index')
=======
const typeRouter = require('./type/index')
>>>>>>> dddb4e1911d8fe2d5ca470e65375d12ab0b38c32

router.use('/', mainRouter)
router.use('/user', userRouter)
router.use('/mint', mintRouter)
router.use('/ship',shipRouter)
<<<<<<< HEAD
router.use('/item',itemRouter)
=======
router.use('/type',typeRouter)
>>>>>>> dddb4e1911d8fe2d5ca470e65375d12ab0b38c32

module.exports = router