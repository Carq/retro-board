var BoardController = require('./controllers/boardController');
var TileController = require('./controllers/tileController');

var appRouter = function(app) {
  let boardController = new BoardController();
  let tileController = new TileController();

  app.get('/api', function(req, res) {
    res.status(200).send('Welcome to our restful API');
  });

  app.get('/api/title', function(req, res) {
    boardController.getTitle(req, res);
  });

  app.post('/api/title', function(req, res) {
    boardController.setTitle(req, res);
  });

  app.get('/api/description', function(req, res) {
    boardController.getDescription(req, res);
  });

  app.post('/api/description', function(req, res) {
    boardController.setDescription(req, res);
  });

  app.get('/api/tiles/:columnId', function(req, res) {
    tileController.getTiles(req, res);
  });
};

module.exports = appRouter;
