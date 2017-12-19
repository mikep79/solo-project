var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/mongo.localstrategy');
var sessionConfig = require('./modules/session.config');

//DB Module
var db = require('./modules/db.config.js');
var mongoose = require('mongoose');

// config for test DB
var config = require('./_config');
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var eventsRouter = require('./routes/events.router');
var createRouter = require('./routes/create.router');
var myEventsRouter = require('./routes/myEvents.router');

var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/events', eventsRouter);
app.use('/create', createRouter);
app.use('/myEvents', myEventsRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
// export app.listen object to test.server.js
var server = app.listen(port, function(){
   console.log('Listening on port:', port);
});

module.exports = server;