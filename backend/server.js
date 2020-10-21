const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const app = express();

// Configs
require('dotenv').config();

const port = process.env.PORT || 5000;

// Connect to DB
mongoose.connect('mongodb+srv://Saxon1233:Saxon1233@cluster1.kzen1.gcp.mongodb.net/userAuth?retryWrites=true&w=majority', { useNewUrlParser: true }, () => console.log('MongoDB database connection established successfully'));

app.use(passport.initialize());
require('./config/passport')(passport);

// Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

// Route Middlewares
app.use('/api/users', require('./routes/user.route'));

app.listen(port, () => console.log(`Server started on port: ${port} :)`));
