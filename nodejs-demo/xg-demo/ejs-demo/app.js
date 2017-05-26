var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.get('/', function (req, res) {
  res.render('index.ejs', { name: 'xg' });
});

app.get('/request/:id', function (req, res) {
  var locals = { name: 'xg', id: req.params['id'] };
  res.render('index.ejs', locals);
});

app.listen(3000, function () {
  console.log('start 3000')
});