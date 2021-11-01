const mongoose = require('mongoose');
const { Schema } = require('./index');
const { Types : { ObjectId } } = Schema


// 스키마 생성 
const itemSchema = new mongoose.Schema({
    clientID:{
        type:ObjectId,
        required:true,
        ref:'User'
    },
    itemType:{
        buyItem:[{
            itemId:{
                type:String,
                unique:true,
            },
            buyDate:{type:Date},
            OrderNumber:{type:Number}
        }],
        sellItem:{
            ItemId:{
                type:String,
                unique:true,
            },
            enterDate:{
                type:Date,
                default:Date.now()
            },
            soldDate:{
                type:Date,
            },
            count:{
                type:Number
            }

        }
    }
})

const item = mongoose.model("Shipping",itemSchema)
// 모델 생성
// collection을 생성한다고 보면 됨.  --> 하나의 테이블 생성
module.exports = item