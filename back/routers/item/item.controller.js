// const { sequelize, Auction, Items } = require('../../models/index')
const { generateUploadURL } = require('../../s3')
const express = require('express')

const uploadPics = async (req, res) => {
    console.log('uploadpics')
    const link = await generateUploadURL();
    res.json({ link })
}

const getUploadedPics = async (req, res) => {
    console.log(req.body)
    res.json({success: true})
}

const uploadData = (req, res) => {
    console.log(req.body)
    res.send({zzz:'zzz'})
}




module.exports = {
    uploadPics, uploadData, getUploadedPics
}