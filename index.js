const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./routes/api');
const { route } = require('./routes/api');
require('dotenv').config();
const Booking = require('./models/booking');

// express app
const app = express();
const PORT = process.env.PORT;


// connect to mongodb
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);
// // to prevent duplication
mongoose.Promise = global.Promise;

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

// route export
app.use('/api',router);

//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// listen for requests
app.listen(PORT, () => {
    console.log('Server is running on PORT ${PORT}');
 });


//  / view engine connection
    app.get('/', (req, res)=>{
    res.render('index');
    
    });
//booking route
app.get('/booking/create', (req, res) => {
    res.render('create', { title: 'Create a new booking' });
  });
  
  app.get('/booking', (req, res) => {
    Booking.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { booking: result, title: 'All bookings' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  //  db form data collections

//     app.post('./routes/api',(req,res)=>{

//     const booking = new Booking(req.body);
//       booking.save()
//     .then((result) =>{
//         res.redirect('/');
//         console.log(req.body);
//     }).catch(next);

// });

   //  404 error

app.use((req, res) =>{
   res.status(404).render('404', {title: '404'});

  });

