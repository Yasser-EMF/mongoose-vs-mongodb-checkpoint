// updateAgeByName.js
const Person = require('./person');

async function updateAgeByName(name, newAge) {
  try {
    // Find one person by name and update their age
    const updatedPerson = await Person.findOneAndUpdate(
      { name: name },
      { age: newAge },
      { new: true } // Return the updated document
    ).exec();

    if (updatedPerson) {
      console.log('Updated person:', updatedPerson);
    } else {
      console.log('No person found with the given name.');
    }
  } catch (err) {
    console.error('Error updating person age:', err);
  }
}

// Replace 'John Doe' with the name you want to update and 30 with the new age
const name = 'John Doe';
const newAge = 26;
updateAgeByName(name, newAge);
