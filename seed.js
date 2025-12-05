const mongoose = require('mongoose');
const Expense = require('../models/Expense');
const data = require('../data/fake_expenses.json');
require('dotenv').config();

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smartexpense';
(async ()=>{
  await mongoose.connect(MONGO);
  await Expense.deleteMany({});
  await Expense.insertMany(data);
  console.log('Seeded');
  process.exit(0);
})();
