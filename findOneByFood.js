// findOneByFood.js
const Person = require('./person');

async function findOneByFood(food) {
  try {
    // Find one person by favorite food
    const person = await Person.findOne({ favoriteFoods: food }).exec();
    console.log('Person found:', person);
  } catch (err) {
    console.error('Error finding person by food:', err);
  }
}

// Call the function with the desired food item
findOneByFood('Tacos');
