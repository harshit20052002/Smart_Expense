const express = require('express');
const mongoose = require('mongoose');
const expensesRoute = require('./routes/expenses');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/expenses', expensesRoute);

const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smartexpense';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> app.listen(3000, ()=> console.log('Server running on :3000')))
  .catch(err=> console.error(err));
