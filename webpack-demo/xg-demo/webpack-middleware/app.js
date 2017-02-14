'use strict';

var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var helpers = require('handlebars-helpers')();

var env = app.get('env');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

// static files root path only works in prodution env, avoid confict with webpack dev server
// if (env === 'production') {
  app.use('/public', express.static(path.join(__dirname, './dest')));
// }

var handlebars = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: 'server/views/layouts/',
  partialsDir: 'server/views/partials/',
  helpers: helpers
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.resolve(path.join(__dirname, './server'), 'views'));

app.use('/', require('./server/controllers/'));

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: 'http://localhost:8080/scripts/',
  stats: { colors: true }
}));
app.use(webpackHotMiddleware(compiler));


var server = app.listen("8080", function() {
  console.log('Listening on port %d ...', server.address().port);
});


module.exports = app;
