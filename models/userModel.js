const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide the username'],
    },
    email: {
        type: String,
        required: [true, 'Please provide the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide the password'],

    },
    completed: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema);

module.exports= User