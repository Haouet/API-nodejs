var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var personsRouter = require('./routes/User');
var app = express();

require("dotenv").config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', personsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Connect databasse Mongodb Atlas
mongoose.connect(process.env.MONGO_URI, (err,done) =>{
 if(err){
  console.log(err);
 }
 if(done){
    console.log('BD est connecter avec succes');
 }
});
module.exports = app;
