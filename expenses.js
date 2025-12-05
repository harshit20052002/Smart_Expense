const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.get('/', async (req, res) => {
  const items = await Expense.find().sort({ date: -1 });
  res.json(items);
});

router.post('/', async (req, res) => {
  const newE = new Expense(req.body);
  await newE.save();
  res.status(201).json(newE);
});

router.put('/:id', async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
