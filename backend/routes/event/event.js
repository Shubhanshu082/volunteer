import express from 'express'
import Event from '../../models/eventModel.js'
const router = express.Router();

router.post("/create",(req,res)=>{
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

router.get("/fetch",(req,res)=>{
    Event.find({},function (err, event){
        if(err) console.log(err);
        else res.send(event);
    })
});

// Export the router instance for use in the main application
export default router;
