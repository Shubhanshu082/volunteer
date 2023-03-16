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
    dateCreated: {
        type: Date,
        required: true,
    },
    participants: {
        type: Object,
    },
    googleId: String,
    secret: String,
}, {
    timestamps: true
})

const Group = mongoose.model('Group', eventSchema);

export default Group;