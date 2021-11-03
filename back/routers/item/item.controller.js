// const { sequelize, Auction, Items } = require('../../models/index')
const { generate_url } = require('../../s3')
const express = require('express')

const upload_pics = async (req, res) => {
    const link = await generate_url();
    res.json({ link })
}

const get_uploaded_pics = async (req, res) => {
    console.log("여기 =======",req.body)
    res.json({success: true})
}

const upload_data = (req, res) => {
    console.log("여기2 =======",req.body)
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
    upload_pics, get_uploaded_pics, upload_data
}