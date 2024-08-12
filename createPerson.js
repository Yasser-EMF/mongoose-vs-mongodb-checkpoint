// createPerson.js
const Person = require('./person');

async function createPerson() {
  try {
    // Create a new person instance
    const newPerson = new Person({
      name: 'John Doe',
      age: 30,
      favoriteFoods: ['Pizza', 'Burger']
    });

    // Save the person to the database
    const savedPerson = await newPerson.save();
    console.log('Person saved:', savedPerson);
  } catch (err) {
    console.error('Error saving person:', err);
  }
}

createPerson();
