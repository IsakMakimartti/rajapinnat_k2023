const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Arvosana, Paivays, idopiskelija, idopintojakso) values(?,?,?,?)',
      [arviointi.Arvosana, arviointi.Paivays, arviointi.idopiskelija, arviointi.idopintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Arvosana=?, Paivays=? where idarviointi=?',
      [arviointi.Arvosana, arviointi.Paivays, id],
      callback
    );
  }
};
module.exports = arviointi;