const express = require('express')
const cors=require('cors')
const path = require('path')
// //logs req and response
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const app = express()
app.use(express.static('build'))
app.use(cors())

// app.get('googleb73f2055947ef46b.html',(req,res)=>{
//   console.log(__dirname+'/build/index.html');
//   res.sendFile(path.join(__dirname+'/build/index.html'));
// })

app.get('*', (req,res) =>{
  console.log(__dirname+'/build/index.html');
  res.sendFile(path.join(__dirname+'/build/index.html'));
});
module.exports=app;