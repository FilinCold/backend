const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI)
    .then(() => console.log(`==========>mongodb connected` ))
    .catch(error => console.log(`==========>error`, error))

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);

module.exports = app;