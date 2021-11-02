
const axios = require('axios');
const qs = require('qs');
const nodemailer = require('nodemailer');
const smtpTransporter = require('nodemailer-smtp-transport');
require('dotenv').config()

const { User } = require('../../models')


let Seller_Admin = async (req,res) => {
    console.log('왓다')
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "simbianartist@gmail.com", //generated ethereal user
            pass: "epiteomqkaae135", //generated ethereal password 
        }
    });

    let url = `http://localhost:3000/admin/approvebtn`;
    let options = {
        from: 'simbianartist@gmail.com',
        to:'simbianartist@gmail.com',//임시로, 나중에는 body에서 가져오게끔한다
        subject: '이메일 인증 완료를 위해 아래 url을 클릭해주세요.',
        html: `서영님, 안녕하세요. <br/>이메일 인증을 위해 아래 URL을 클릭해주세요. <br/> ${url}`
    }

    transporter.sendMail(options, function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log('email has been successfully sent.');
        }
        transporter.close();
    })
}



let AddUser = async (req,res) => {
    let {name,email,kaikasAddress} = req.body
    try {
        await User.create({name,email,kaikasAddress})
        result = {
            result:'OK',
            msg:'가입 성공'
        }
    }catch(e){
        console.log(e)
        result = {
            result:'Fail',
            msg:'가입 실패'
        }
    }
    res.json(result)
}


let Signup_post = (req,res) => {
    
    console.log('this is body')
    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)
    console.log(keyObject.NickName)
    console.log(keyObject.Address)
    console.log(keyObject.Email)

}
module.exports = {
    Seller_Admin,
    AddUser,
    Signup_post
}