
const express=require('express');
const fs=require('fs');

const app=express();




const HOSTNAME='127.0.0.1';
const PORT = 3001;



// create date and time
const time_stamp = new Date().toString();
const Datetime=new Date();
const date=("0"+Datetime.getDate()).slice(-2);
const month=('0'+Datetime.getMonth()).slice(-2);
const year=Datetime.getFullYear();
const hours=Datetime.getHours();
const minutes=Datetime.getMinutes();
const seconds=Datetime.getSeconds();

const currentDateTime=date+'_'+month+'_'+year+'_'+hours+'_'+minutes+'_'+seconds

// API endpoint 
('/') -http://127.0.0.1:3001;
('/file')-textfile http://127.0.0.1:3001/file;


app.get('/',(request ,response)=>{
    response.send('node js task timestamp endpoint '/file');
})


fs.writeFile('./textFile.txt',currentDateTime +'.txt \n',{flag:'a'},(err)=>{
    console.log('file created');
    
})


app.get('/file',(req,res)=>{
    fs.readFile('./textFile.txt','utf-8',(err,data)=>{
        if(err) throw err;
        console.log(data);
        res.send(data);
    })

});


app.listen(PORT,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
});
