const express = require('express');
const app = express();
require ('./mongodb')
const {test} = require('./mongodb')




const bodyParser = require('body-parser');


// /mongoose.connect('mongodb://localhost:27017/AzitGallery')
// const db = mongoose.connection
// db.on('error', function(){
//     console.log('Connection Failed!');
// });
// db.once('open', function(data) {
//     console.log('Connected!');
// });

//console.log(db.AzitGallery.find())



// mongoose
//     .connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('Successfully connected to mongodb'))
//     .catch(e => console.error(e));

// const conn = await mongoose.createConnection('mongodb://localhost:27017/AzitGallery').asPromise()

// conn.model('AzitGallery', new Schema({ name: String }));

// console.log(conn.model('AzitGallery'))



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// app.get('/',(req,res)=>{
//     res.send('나오니?')
// })

app.listen(4000,()=>{
    console.log(`server start ${4000}`)
})