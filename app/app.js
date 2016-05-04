var express       = require('express');
var app           = express();
var bodyParser = require('body-parser');
// var morgan = require('morgan');


require('dotenv').load();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('tiny')); // just to log requests step by step but not needed!
app.use(express.static('public'));
 // app.use(express.static('www'));


require('./routes')(app);

module.exports = app;
