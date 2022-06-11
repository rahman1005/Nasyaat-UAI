require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var alleventRouter = require('./routes/allevents');
var category = require('./routes/category');
var lembagaRouter = require('./routes/lembaga');
var admin = require('./routes/admin');
var eventUai = require('./routes/eventUAI');
var eventOrmawa = require('./routes/eventORMAWA');
var eventUkkm =require('./routes/eventUKKM');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static('assets'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/allevents',alleventRouter),
app.use('/category',category);
app.use('/lembaga',lembagaRouter);
app.use('/admin',admin);
app.use('/eventuai', eventUai);
app.use('/eventormawa', eventOrmawa);
app.use('/eventukkm', eventUkkm);
module.exports = app;
