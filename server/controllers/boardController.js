var repository = require('../db/repository');

class BoardController {
  async getTitle(req, res) {
    try {
      const title = await repository.getTitle();
      res.status(200).json({
        title: title,
      });
    } catch (e) {
      res.status(500).send();
    }
  }

  setTitle(req, res) {
    repository
      .setTitle(req.body.title)
      .then(() => {
        res.status(200).send();
      })
      .catch(() => res.status(500).send());
  }

  async getDescription(req, res) {
    try {
      const description = await repository.getDescription();
      res.status(200).json({
        description: description,
      });
    } catch (e) {
      res.status(500).send();
    }
  }

  setDescription(req, res) {
    repository
      .setDescription(req.body.description)
      .then(() => {
        res.status(200).send();
      })
      .catch(() => res.status(500).send());
  }
}

module.exports = BoardController;
