import express from 'express'
const router = express.Router();
import eventRoute from './event/event.js'
import userRoute from './user/user.js'

router.use("/event",eventRoute);
router.use('/user',userRoute);

// Export the router instance for use in the main application
export default router;
