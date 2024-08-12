// createManyPeople.js
const Person = require('./person');

async function createManyPeople() {
  try {
    // Array of people to be created
    const arrayOfPeople = [
      { name: 'Jane Doe', age: 25, favoriteFoods: ['Sushi', 'Tacos'] },
      { name: 'Alice Smith', age: 28, favoriteFoods: ['Pasta', 'Burgers'] },
      { name: 'Bob Johnson', age: 32, favoriteFoods: ['Salad', 'Steak'] }
    ];

    // Create multiple people and await the result
    const people = await Person.create(arrayOfPeople);
    console.log('People created:', people);
  } catch (err) {
    console.error('Error creating people:', err);
  }
}

// Call the function to execute the creation
createManyPeople();
