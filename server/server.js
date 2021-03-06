var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var config = require('./config');

var app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));

app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));

var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
    console.log('Connected to Mongo DB at ' + mongoURI);
});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
