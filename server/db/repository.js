var sqlite3 = require('sqlite3');

var repository = new class Repository {
  constructor() {
    this.db = new sqlite3.Database(
      './db/retro-board.db',
      sqlite3.OPEN_READWRITE,
      err => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('Connected to the retro-board database.');
        }
      },
    );
  }

  getTitle() {
    let sql = 'SELECT title FROM board';
    return new Promise((resolve, reject) => {
      this.db.get(sql, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err.message);
        } else {
          resolve(row.title);
        }
      });
    });
  }

  getDescription() {
    let sql = 'SELECT description FROM board';
    return new Promise((resolve, reject) => {
      this.db.get(sql, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err.message);
        } else {
          resolve(row.description);
        }
      });
    });
  }

  setDescription(description) {
    let sql = `UPDATE board SET description = $description WHERE id = 1;`;
    let params = { $description: description };

    return new Promise((resolve, reject) => {
      this.db.run(sql, params, err => {
        if (err) {
          console.error(err);
          reject(err.message);
        } else {
          resolve();
        }
      });
    });
  }

  setTitle(title) {
    let sql = `UPDATE board SET title = $title WHERE id = 1;`;
    let params = { $title: title };

    return new Promise((resolve, reject) => {
      this.db.run(sql, params, err => {
        if (err) {
          console.error(err);
          reject(err.message);
        } else {
          resolve();
        }
      });
    });
  }
}();

module.exports = repository;
