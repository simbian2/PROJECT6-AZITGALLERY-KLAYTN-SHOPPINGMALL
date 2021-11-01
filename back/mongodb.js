// mongoose는 mongodb와 연결을 쉽게 해주는 라이브러리
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const url = 'mongodb://localhost:27017/AzitGallery'

// mongodb연결
mongoose
    .connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


// 스키마 생성
const UserSchema = new mongoose.Schema({
    userInfo:{
        name:{type:String},
        contact:{
            email:{type:String},
            phone:{type:String},
        },
        walletAddress:{type:String},
        address:{type:String},
        joinDate:{type:String}
    },
    type:{
        true:[{
            title:{type:String},
        }],
        false:{type:Boolean}
    },
    history:[{
        buyInfo:{
            itemId:{type:String},
            buyDate:{type:Date},
            OrderNumber:{type:Number}
        }
    }]

})


// 모델 생성
// collection을 생성한다고 보면 됨.  --> 하나의 테이블 생성
const User = mongoose.model("User",UserSchema)

// db에 데이터를 넣어줌
User.create([{
    userInfo:{
        name:'mihee2',
        contact:{
            email:'asdf',
            phone:'asdf',
        },
        walletAddress:'asdf',
        address:'asdf',
        joinDate:'asdf'        
    },
    type:{
        true:[{}]
    },
    history:[{
        buyInfo:{
            buyDate:2021-05-07,
            orderNumber:1541
        }
    }]
}])


User.find({},(err,docs)=>{
    console.log(docs)
})


module.exports = User