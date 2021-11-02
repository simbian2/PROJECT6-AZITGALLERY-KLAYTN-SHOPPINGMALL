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
}

const s3test = async (req, res) => {
  const url = await generateUploadURL();
  res.json({ url })
}



module.exports = {
    uploadPics, s3test, uploadData
}