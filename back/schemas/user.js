const mongoose = require('mongoose');
const { Schema } = require('./index');


// 스키마 생성 
const UserSchema = new mongoose.Schema({
    userInfo:{
        name:{
            type:String,
            required:true
        },
        contact:{
            email:{
                type:String,
                unique:true
            },
            phone:{type:String},
        },
        walletAddress:{type:String},
        address:{type:String},
        joinDate:{type:String}
    },
    clientType:{type:Boolean},
    history:[{
        buyInfo:{
            itemId:{type:String},
            buyDate:{type:Date},
            OrderNumber:{type:Number}
        }
    }]
})

const User = mongoose.model("User",UserSchema)
// 모델 생성
// collection을 생성한다고 보면 됨.  --> 하나의 테이블 생성
module.exports = User