var repository = require('../db/repository');

class TileController {
  async getTiles(req, res) {
    {
      try {
        const columnId = req.params.columnId;
        const tiles = await repository.getTiles(columnId);
        res.status(200).json(tiles);
      } catch (e) {
        res.status(500).send();
      }
    }
  }
}

module.exports = TileController;
