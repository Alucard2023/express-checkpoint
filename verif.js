let day=new Date().getDay()
let hours=new Date().getHours()
const fs = require('fs');

function verif1(req,res,next){
  if(day>0 && day<6 && hours>8 && hours<17)
  next()
    else 

      fs.readFile('./text.html','utf8',(err,data)=>{
          err ? res.send('file not found') && console.error(err) : res.send(data)
      })
  
}

module.exports=verif1 ;