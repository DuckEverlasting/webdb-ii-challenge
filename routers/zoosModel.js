const db = require('../dbConfig')

module.exports = {
  add,
  get,
  getById,
  remove,
  update
}

function get() {
  return db('zoos')
}

function getById(id) {
  return db('zoos')
    .where('id', id)
    .first();
}

function add(zoo) {
  return db('zoos')
    .insert(zoo)
    .then(ids => {
      [id] = ids
      return getById(id)
    });
}

function remove(id) {
  return getById(id)
    .then(zoo => {
      if (zoo) {
        return db('zoos')
          .where('id', id)
          .del()
          .then(() => {
            return zoo
          });
      } else {
        return null;
      }
    });
}

function update(id, changes) {
  return db('zoos')
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