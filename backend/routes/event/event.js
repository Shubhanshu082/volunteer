import express from 'express'
import Event from '../../models/eventModel.js'
const router = express.Router();

router.get("/fetch/:id", async(req,res)=>{
  const eventId = req.params.id;
  console.log(eventId);
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' })
  }
  res.send(event);
});

router.post("/create",(req,res)=>{
    console.log(req.body) 
    const {name, description,startDate, endDate, location} = req.body;
    const event = new Event({name, description, startDate, endDate, location})
    event.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message:"Successfull"})
        }
    })
});

router.get("/fetch", async(req,res)=>{
    console.log("fetch");
    const now = new Date();
    let events = new Object();
    try {
        const upcomingEvents = await Event.find({ startDate: { $gte: now } });
        events.upcoming = upcomingEvents;

        const pastEvents = await Event.find({ endDate: { $lte: now } });
        events.past = pastEvents;

        const ongoingEvents = await Event.find({
          startDate: { $lte: now },
          endDate: { $gte: now },
        });
        events.ongoing = ongoingEvents; 
        res.send(events);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
});

router.put('/register/:id', async (req, res) => {
  console.log("registering");
  try {
    const eventId = req.params.id
    const userId = req.body.userId // Assumes the user is authenticated and the user ID is available in the request object
    
    const event = await Event.findById(eventId)

    if (!event) {
      return res.status(404).json({ message: 'Event not found' })
    }

    if (event.participants.includes(userId)) {
      return res.status(400).json({ message: 'User already registered for this event' })
    }

    event.participants.push(userId)
    await event.save()

    res.json({ message: 'User registered successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

// Export the router instance for use in the main application
export default router;
