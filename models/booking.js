const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create booking schema and model
const BookingSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    Region:{
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Booking', BookingSchema);