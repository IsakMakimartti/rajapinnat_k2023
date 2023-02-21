var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //Täytyy olla nämä että selaimessa voidaan kutsua usersia ja indeksiä | require = c:ssä include
var usersRouter = require('./routes/users'); //Täytyy olla nämä että selaimessa voidaan kutsua usersia ja indeksiä | require = c:ssä include

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //Täytyy olla nämä että selaimessa voidaan kutsua usersia ja indeksiä | require = c:ssä include
app.use('/users', usersRouter); //Täytyy olla nämä että selaimessa voidaan kutsua usersia ja indeksiä | require = c:ssä include

module.exports = app;
