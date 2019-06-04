const express = require('express');
const router = express.Router();

const bears = require('./bearsModel.js');

router.get('/', (req, res) => {
  bears.get()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  bears.get(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.post('/', (req, res) => {
  const bear = req.body
  bears.add(bear)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.put('/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  bears.update(id, changes)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  bears.remove(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

module.exports = router;