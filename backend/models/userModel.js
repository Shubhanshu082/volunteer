import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true,
        default: 0
    },
    events: {
        type: Number,
        required: true,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    googleId: String,
    secret: String,
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;