const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();

// Configs
require('dotenv').config();

const port = process.env.PORT || 5000;

// Connect to DB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true }, () => console.log('MongoDB database connection established successfully'));

app.use(passport.initialize());
require('./config/passport')(passport);

// Middleware
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api/users', require('./routes/user.routes'));

app.listen(port, () => console.log(`Server started on port: ${port}`));