const db = require('../dbConfig')

module.exports = {
  add,
  get,
  getById,
  remove,
  update
}

function get() {
  return db('bears')
}

function getById(id) {
  return db('bears')
    .where('id', id)
    .first();
}

function add(bear) {
  return db('bears')
    .insert(bear)
    .then(ids => {
      [id] = ids
      return getById(id)
    });
}

function remove(id) {
  return getById(id)
    .then(bear => {
      if (bear) {
        return db('bears')
          .where('id', id)
          .del()
          .then(() => {
            return bear
          });
      } else {
        return null;
      }
    });
}

function update(id, changes) {
  return db('bears')
    .where('id', id)
    .update(changes)
    .then(res => {
      if(res > 0) {
        return getById(id);
      } else {
        return null;
      }
    })
}