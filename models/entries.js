const mongoose = require("mongoose");

const entrySchema  = new mongoose.Schema({
    total:{
        type: Number,
        required: true,

    },
    snack: {
        type: String,
        required: false
    },
    snackCount:{
        type: Number,
        default: 0,
    },
    time: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Entry', entrySchema);