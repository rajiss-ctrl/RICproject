
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// let initialPath = path.join(__dirname); in the same directory.
let initialPath = path.join(__dirname, "public");
app= express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(initialPath, "index.html"))
});

app.post('/mail',(req,res)=>{
    const { groupName,groupClass,groupEmail,ans}=req.body;

    const transporter =nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions={
        from:'omosanjos77@gmail.com',
        to: 'omosanjos77@gmail.com',
        subject:'project',
        text: `Group name: ${groupName}, \nGroup name: ${groupClass}, \nGroup email: ${groupEmail}, \nAnswer: ${ans} `
    }
    transporter.sendMail(mailOptions, (err,result)=>{
        if(err){
            console.log(err);
            res.json('oops! it seems like some error occured. plz try again');
        }else{
            res.json('thanks your answer has been sent, i will reply to you shortly');
        }
    });
})

app.listen('3000',()=>{
    console.log('listening...');
});