const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create man-united squad schema
const ManUtdSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    role: {
        type: String,
    },
    present:{
        type: Boolean,
        default: true
    }
});

const ManUtd = mongoose.model('player', ManUtdSchema);

module.exports= ManUtd;