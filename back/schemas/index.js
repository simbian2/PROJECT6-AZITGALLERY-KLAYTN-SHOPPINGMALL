const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/AzitGallery'
const Schema = mongoose.Schema




// mongodb연결
const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug',true);
    }
    mongoose.connect(url,{
        dbName:'AzitGallery',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(error)=> {
        if(error){
            console.log('error',error)
        }else{
            console.log('suc',)
        }
    })
}
mongoose.connection.on('error',(error)=>{
    console.error('db error',error)
})
mongoose.connection.on('disconnected',()=>{
    console.error('mongodb is disconnected, try reconnect')
    connect()
})

module.exports = connect

