const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    apikey: {
        type: String,
    }
});

const User = mongoose.model('user', UserSchema);

module.exports= User;
