import cron from 'cron';
import Event from '../models/eventModel.js';

// Define the cron job to run every hour
const job = new cron.CronJob('0 * * * *', async function() {

  // Get all events from the database
  const events = await Event.find();

  // Loop through each event and update the status
  events.forEach(event => {

    const now = new Date();

    if (now > event.endDate) {
      // Event has ended
      event.status = 'Ended';
    } else if (now >= event.startDate && now < event.endDate) {
      // Event is ongoing
      event.status = 'Ongoing';
    } else {
      // Event is upcoming
      event.status = 'Upcoming';
    }

    // Save the updated event to the database
    event.save();
  });

}, null, true);

// Start the cron job
job.start();
