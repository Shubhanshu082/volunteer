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
import routes from './routes/api.js'

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
});