var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
//var socketIO = require('socket.io');
var app = express();

// var server = http.createServer(app);
// var io = socketIO(server);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var codesRouter = require("./routes/codes");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use('/codes', codesRouter);

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

// server.listen(9000, function() {
//   console.log('Starting server on port 9000');
// });

// io.on("connection", socket => {
//   console.log("New client connected");

//   //Here we listen on a new namespace called "incoming data"
//   socket.on("incoming data", (data)=>{
//       //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
//      socket.broadcast.emit("outgoing data", {num: data});
//   });

//   //A special namespace "disconnect" for when a client disconnects
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });


module.exports = app;
