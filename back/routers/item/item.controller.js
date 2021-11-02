// const { sequelize, Auction, Items } = require('../../models/index')
const { generateUploadURL } = require('../../s3')
const express = require('express')

const uploadPics = async (req, res) => {
    const link = await generateUploadURL();
    res.json({ link })
}

const getUploadedPics = async (req, res) => {
    console.log(req.body)
    res.json({success: true})
}

const uploadData = (req, res) => {
    console.log(req.body)
    // 나중에는 creator 도 가져와야함..
    const {price, currency, name, desc} = req.body

    // let result = {};
    // try {
    //     await Board.create({ creator: 'youki', title: name, price})
    //     result = {
    //         result: 'OK',
    //         msg: 'NFT 성공'
    //     }
    //     let resu =  await Board.findAndCountAll({})
    //     await Like.create({likeBoardIdx:resu.count})
    // } catch (error) {
    //     console.log(error)
    //     result = {
    //         result: 'Fail',
    //         msg: 'NFT 실패..'
    //     }
    // }
    // res.json(result)
    res.send({zzz:'zzz'})
}




module.exports = {
    uploadPics, uploadData, getUploadedPics
}