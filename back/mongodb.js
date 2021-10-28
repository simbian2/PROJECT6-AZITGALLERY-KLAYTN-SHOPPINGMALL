const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

mongoose.connect('mongodb://localhost:27017/AzitGallery',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
//     useFindAndModify: false,
//    useCreateIndex: true
})

const connection = mongoose.connection
connection.on('error',console.error)
connection.once('open',()=>{
    console.log('connected mongodb')
})


const test = mongoose.model('mihee',new Schema({
    name:{type:String},
    content:{type:String},
    likeCount:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now}
},{
    versionKey:false
}))

const nameco = 'mihee'
const contentco = 'content'
// test.insert((err,{name:nameco,content:contentco})=>{
//     console.log(content)
// })

test.create([{name:nameco,content:contentco}])
//test.create({name:nameco,content:contentco},{test:test})


test.find((err,data)=>{
    console.log(data)
})
//===========================================================

const User = mongoose.model('User',new Schema({
    userInfo:{
        name:{type:string},
        contact:{
            email:{type:string},
            phone:{type:string},
        },
        walletAddress:{type:string},
        address:{type:string},
        joinDate:{type:string}
    },
    type:{
        true:{

        },
        false:{

        }
    }

}))
//type -> 구매자 판매자 여부
// true => 구매자 and 판매자
// false => only 구매자

const Ship = mongoose.model('Ship',new Schema({

}))

const Item = mongoose.model('Item',new Schema({

}))




module.exports = test