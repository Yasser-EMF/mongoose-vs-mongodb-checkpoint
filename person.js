// person.js
const mongoose = require('./db'); // Import the mongoose instance
const { Schema } = mongoose;

// Define the Person schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [String]
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
