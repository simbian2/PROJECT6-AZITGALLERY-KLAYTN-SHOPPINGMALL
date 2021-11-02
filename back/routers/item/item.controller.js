// const { sequelize, Auction, Items } = require('../../models/index')
const { generateUploadURL } = require('../../s3')
const express = require('express')

const uploadPics = (req, res) => {
    console.log('zxc')
    console.log(req.file)
    console.log(req.body)
}

const uploadData = (req, res) => {
    console.log(req.body)
    // 나중에는 creator 도 가져와야함..
    const {price, currency, name, desc} = req.body

    let result = {};
    try {
        await Board.create({ creator: 'youki', title: name, price})
        result = {
            result: 'OK',
            msg: 'NFT 성공'
        }
        let resu =  await Board.findAndCountAll({})
        await Like.create({likeBoardIdx:resu.count})
    } catch (error) {
        console.log(error)
        result = {
            result: 'Fail',
            msg: 'NFT 실패..'
        }
    }
    res.json(result)
}

const s3test = async (req, res) => {
  const url = await generateUploadURL();
  res.json({ url })
}



module.exports = {
    uploadPics, s3test, uploadData
}