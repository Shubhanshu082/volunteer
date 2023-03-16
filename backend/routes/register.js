import express from 'express';
import User from '../models/userModel.js';

const app = express();

app.post("/api/user/register",(req,res)=>{
    console.log(req.body) 
    const {userName, name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already exists!"})
        }else {
            const user = new User({userName, name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"Successfull"})
                }
            })
        }
    })


}) 