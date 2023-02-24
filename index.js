const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bookingRoutes = require('./routes/api');

require('dotenv').config();

// express app
const app = express();
const PORT = process.env.PORT;

// connect to mongodb
const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});

// register view engine
app.set('view engine', 'ejs');
// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

// route export
app.use('/booking', bookingRoutes)

// view engine connection
app.get('/', (req, res) => {
  res.render('index');
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

