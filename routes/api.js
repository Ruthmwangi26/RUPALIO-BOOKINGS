const express = require('express');
const router = express.Router();
const Booking = require('./../models/booking');
// get request
router.get('/booking', (req, res,next)=>{
    // res.send({type: 'GET'});
    Booking.find({}).then((booking)=>{
        res.send(booking );
    }) .catch(err => {
      res.send(err);
    });

})
// post request
router.post('/booking', (req, res,next)=>{
    Booking.create(req.body).then((booking)=>{
        res.send(booking)
      
    }).catch(err => {
      res.send(err);
    });

    });


//put(update/change) request
router.put('/booking/:id', (req, res)=>{
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
      Booking.findOne({_id: req.params.id}).then((booking)=>{
        res.send(booking);
      })

    });

})
// patch request
router.patch('/booking/:id', (req, res)=>{
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
      Booking.findOne({_id: req.params.id}).then((booking)=>{
        res.send(booking);
      })

    });

})
// // delete request
router.delete('/booking/:id', (req, res)=>{
    Booking.findByIdAndRemove({_id: req.params.id}).then((booking)=>{
    res.send(booking);
     });
})


module.exports =router;