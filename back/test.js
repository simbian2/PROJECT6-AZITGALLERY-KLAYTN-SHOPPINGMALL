const express = require('express')
const app = express()
const bodyParser = require('body-parser')



const PORT = '4000'


// app.use(cookieParser())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


require ('./mongodb')
const {test} = require('./mongodb')

app.get('/',(req,res)=>{
    res.send('나오나?')
})
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})


