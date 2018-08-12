var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routers = require('./routes');

routers(app);

var server = app.listen(3000, function() {
  console.log('Server running on port:', server.address().port);
});
