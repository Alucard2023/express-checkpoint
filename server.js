const express=require('express');
const app = express();
const PORT=6300;
const fs = require('fs');
const v =require('./verif')

app.get('/',v,(req,res)=>{
    fs.readFile('./Home.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.get('/Home.html',v,(req,res)=>{
    fs.readFile('./Home.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})


app.get('/Contact.html',v,(req,res)=>{
    fs.readFile('./Contact.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.get('/Services.html',v,(req,res)=>{
    fs.readFile('./Services.html','utf8',(err,data)=>{
        err ? res.send('file not found') && console.error(err) : res.send(data)
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
}
)
