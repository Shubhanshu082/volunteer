import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    participants: {
        type: Object,
    },
    host: {
        type: Object,
    },
    googleId: String,
    secret: String,
}, {
    timestamps: true
})

const Event = mongoose.model('Event', eventSchema);

export default Event;