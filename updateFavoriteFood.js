// updateFavoriteFood.js
const Person = require('./person');

async function updateFavoriteFood(personId) {
  try {
    // Find a person by their _id
    const person = await Person.findById(personId).exec();

    if (person) {
      // Add "hamburger" to the person's favoriteFoods array
      person.favoriteFoods.push('Burgers');
      // Save the updated person
      const updatedPerson = await person.save();
      console.log('Updated person:', updatedPerson);
    } else {
      console.log('No person found with the given ID.');
    }
  } catch (err) {
    console.error('Error updating favorite food:', err);
  }
}

// Replace 'YOUR_PERSON_ID_HERE' with the actual ID you want to update
const personId = 'Alice Smith';
updateFavoriteFood(personId);
