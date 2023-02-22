const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create booking schema and model
const BookingSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    Region:{
        type: String
    },

});


const Booking = mongoose.model('booking', BookingSchema);

module.exports= Booking;