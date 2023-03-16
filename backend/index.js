import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv  from 'dotenv';
dotenv.config();
import passport from 'passport';
import connectDB from './config/db.js';
connectDB();
// import './config/authenticate.js';
import User from './models/userModel.js'
import Event from './models/eventModel.js'
import Group from './models/groupModel.js'
import './routes/login.js';
import './routes/register.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('Lmao ded');
});

app.post("/api/user/login",(req,res)=>{
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
});

app.post("/api/event/create",(req,res)=>{
    console.log(req.body) 
    const {name, description,date,location} = req.body;
    const event = new Event({name, description, date, location})
    event.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message:"Successfull"})
        }
    })
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
});