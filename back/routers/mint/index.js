const express = require('express')
const router = express.Router()
const controller = require('./mint.controller')

router.post('/mintnft', controller.mint_nft_post)

module.exports = router