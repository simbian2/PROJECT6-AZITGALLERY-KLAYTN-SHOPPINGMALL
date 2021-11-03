// const { sequelize, Auction, Items } = require('../../models/index')
const { generate_url } = require('../../s3')
const express = require('express')

const upload_pics = async (req, res) => {
    const link = await generate_url();
    res.json({ link })
}

const get_uploaded_pics = async (req, res) => {
    console.log(req.body)
    res.json({success: true})
}

const upload_data = (req, res) => {
    // console.log(req.body[0])
    console.log(req.body)

    res.send({zzz:'zzz'})
}




module.exports = {
    upload_pics, get_uploaded_pics, upload_data
}