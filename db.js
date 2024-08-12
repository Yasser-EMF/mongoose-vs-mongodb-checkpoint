// db.js
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
