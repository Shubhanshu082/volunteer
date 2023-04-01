import express from 'express'
import User from '../../models/userModel.js'
const router = express.Router();

router.post("/login",(req,res)=>{
    const {email,password} =req.body;
    User.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

router.post("/register",(req,res)=>{
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
});

export default router;
