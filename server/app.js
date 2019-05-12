var app = require('express')();
var bodyParser = require('body-parser');
var repository = require('./db/repository');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

var routers = require('./routes');

routers(app);

var server = app.listen(3000, function() {
  console.log('Server running on port:', server.address().port);
});

var io = require('socket.io').listen(server);
io.on('connection', socket => {
  console.log(`New client connected id ${socket.id}`);

  socket.on('setBoardTitle', boardTitle => {
    repository.setTitle(boardTitle);
    socket.broadcast.emit('boardTitleChanged', boardTitle);
  });

  socket.on('setBoardDescription', boardDescription => {
    repository.setDescription(boardDescription);
    socket.broadcast.emit('boardDesciptionChanged', boardDescription);
  });

  socket.on('addTile', tileData => {
    repository.saveTile(tileData);
    socket.broadcast.emit('tileAdded');
  });
});
