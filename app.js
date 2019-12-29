const express = require('express')
const cors=require('cors')
const path = require('path')
// //logs req and response
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const app = express()
app.use(express.static('build'))
app.use(cors())
module.exports=app;