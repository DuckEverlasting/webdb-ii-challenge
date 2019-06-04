const express = require('express');
const router = express.Router();

const zoos = require('./zoosModel.js');

router.get('/', (req, res) => {
  zoos.get()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  zoos.get(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.post('/', (req, res) => {
  const zoo = req.body
  zoos.add(zoo)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.put('/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  zoos.update(id, changes)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  zoos.remove(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong." }))
});

module.exports = router;