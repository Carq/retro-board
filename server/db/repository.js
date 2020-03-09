var sqlite3 = require('sqlite3');

var repository = new (class Repository {
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
          resolve(row && row.title);
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
          resolve(row && row.description);
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

  getTiles(columnId) {
    let sql = `SELECT id, name, [order], column_id FROM tiles WHERE column_id = $columnId`;
    let params = {
      $columnId: columnId,
    };
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.error(err);
          reject(err.message);
        } else {
          var tiles = [];

          rows.forEach(row => {
            tiles.push({
              id: row.id,
              name: row.name,
              order: row.order,
              columnId: row.column_id,
            });
          });

          resolve(tiles);
        }
      });
    });
  }

  saveTile(tileData) {
    if (tileData.id > 0) {
      this.updateTile(tileData);
    } else {
      this.createNewTile(tileData);
    }
  }

  updateTile(tileData) {
    let sql = `UPDATE tiles 
               SET name = $name, [order] = $order
                WHERE Id = $id`;
    let params = {
      $id: tileData.id,
      $name: tileData.name,
      $order: tileData.order,
    };
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

  createNewTile(tileData) {
    let sql = `INSERT INTO tiles (name, [order], column_id)
      VALUES ($name, $order, $column_id);`;
    let params = {
      $name: tileData.name,
      $order: tileData.order,
      $column_id: tileData.columnId,
    };
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
})();

module.exports = repository;
