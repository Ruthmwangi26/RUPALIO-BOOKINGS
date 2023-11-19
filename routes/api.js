const express = require('express');
const router = express.Router();

const Booking = require('./../models/booking');

//booking route
router.get('/create', (req, res) => {
  res.render('index', { url: process.env.SELF_URL })
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
});

// get request
router.get('/', (req, res) => {
  Booking.findOne().sort({ createdAt: -1 })
    .then(result => {
      res.render('bookings', { booking: result, title: 'All bookings' });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
});

// post request
router.post('/', (req, res) => {
  Booking.create(req.body).then((booking) => {
    res.send(booking);
  
  })
  
  
  .catch(err => {
    res.status(400).json({ message: err.message });
  });
});


//put(update/change) request
router.put('/:id', (req, res) => {
  Booking.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Booking.findOne({ _id: req.params.id })
      .then((booking) => {
        res.send(booking);
      }).catch(err => {
        res.status(400).json({ message: err.message });
      });
  });

})
// patch request
router.patch('/:id', (req, res) => {
  Booking.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Booking.findOne({ _id: req.params.id })
      .then((booking) => {
        res.send(booking);
      }).catch(err => {
        res.status(400).json({ message: err.message });
      });
  });

})
// delete request
router.delete('/:id', (req, res) => {
  Booking.findByIdAndRemove({ _id: req.params.id })
    .then((booking) => {
      res.send(booking);
    }).catch(err => {
      res.status(400).json({ message: err.message });
    });
})

module.exports = router;