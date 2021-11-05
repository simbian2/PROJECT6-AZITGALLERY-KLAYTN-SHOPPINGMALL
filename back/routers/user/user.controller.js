const axios = require('axios');
const qs = require('qs');
const nodemailer = require('nodemailer');
const smtpTransporter = require('nodemailer-smtp-transport');
require('dotenv').config()
const { auction, deliver, item, user } = require("../../models");
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






// let Signup_post = async (req,res) => {
//     console.log('this is body')
//     let key = Object.keys(req.body)
//     let keyObject = JSON.parse(key)
//     let { NickName, Address,Email} = keyObject
//     console.log(keyObject)
//     console.log(keyObject.NickName)
//     console.log(keyObject.Address)
//     console.log(keyObject.Email)
//     let result
//     try{
//         await User.create({name:NickName,email:Email,kaikasAddress:Address})
//         result = {
//             result:'OK',
//             msg:'가입 성공'
//         }
//     }catch(e){
//         console.log(e)
//         result = {
//             result:'FAIL',
//             mas:'가입 실패'
//         }
//     }
//     res.json(result)
// }


let Signup_post = async (req,res) => {
    
    console.log('this is body')
    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)
    let name = keyObject.NickName
    let kaikasAddress = keyObject.Address
    let email = keyObject.Email
    let createdAt = new Date()
    let buyItemNft = '일단 비움'
    let likeItem = '일단 비움'
    let kycAuthorized = 0

    console.log(keyObject.NickName)
    console.log(keyObject.Address)
    console.log(keyObject.Email)

    let result = await User.create({name,email,kaikasAddress,createdAt,buyItemNft,likeItem,kycAuthorized})
    console.log(result)

}

let Address_Db_check = async (req,res) => {
    
    console.log('this is db check')
    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)

    let result = await User.findAll({where:{kaikasAddress:keyObject}})

    if(result.length != 0) {
        console.log(result.length)
        let data = {
            signupBoolean:true
        }
        res.json(data)
    }else{
        console.log(result.length)
        let data = {
            signupBoolean:false
        }
        res.json(data)
    }
    console.log(result)

}

let Userlist_get = async (req,res) => {

    let result = await User.findAll({})
  

    const ARR = []

    for(let i=0; i<result.length; i++){
        ARR.push({id:`Arr${i+1}`,name:result[i].name, kaikasAddress:result[i].kaikasAddress, email:result[i].email, kycAuthorized:result[i].kycAuthorized })
    }
    console.log(ARR)
    let data = {
        ARR:ARR
    }

    res.json(data)

}

let selleradmin_access = async (req,res) => {

    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)

    let result = await User.update({kycAuthorized:3},{where:{name:keyObject}})

}

let selleradmin_deny = async (req,res) => {

    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)

    let result = await User.update({kycAuthorized:2},{where:{name:keyObject}})

}

let selleradmin_wait = async (req,res) => {

    let key = Object.keys(req.body)
    let keyObject = JSON.parse(key)
    console.log(keyObject)

    let result = await User.update({kycAuthorized:1},{where:{kaikasAddress:keyObject}})

}

module.exports = {
    Seller_Admin,
    // AddUser,
    Signup_post,
    Address_Db_check,
    Userlist_get,
    selleradmin_access,
    selleradmin_deny,
    selleradmin_wait
}