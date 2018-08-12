var repository = require('../db/repository');

class BoardController {
  getTitle(req, res) {
    return repository
      .getTitle()
      .then(title => {
        res.status(200).json({
          title: title,
        });
      })
      .catch(() => {
        res.status(500).send();
      });
  }

  setTitle(req, res) {
    repository
      .setTitle(req.body.title)
      .then(() => {
        res.status(200).send();
      })
      .catch(() => res.status(500).send());
  }

  getDescription(req, res) {
    return repository
      .getDescription()
      .then(description => {
        res.status(200).json({
          description: description,
        });
      })
      .catch(() => {
        res.status(500).send();
      });
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
