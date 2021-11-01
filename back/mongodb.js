const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

mongoose.connect('mongodb://localhost:27017/AzitGallery',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.on('error',console.error)    
connection.once('open',()=>{
    console.log('connected mongodb')
})


const User = mongoose.model('User',new Schema({
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

}))

User.create([{
    userInfo:{
        name:'mihee',
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


console.log(User.find())


module.exports = User