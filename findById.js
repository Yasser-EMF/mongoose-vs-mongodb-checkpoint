// findById.js
const Person = require('./person');

async function findPersonById(personId) {
  try {
    // Find a person by their _id
    const person = await Person.findById(personId).exec();
    if (person) {
      console.log('Person found:', person);
    } else {
      console.log('No person found with the given ID.');
    }
  } catch (err) {
    console.error('Error finding person by ID:', err);
  }
}

// Replace 'YOUR_PERSON_ID_HERE' with the actual ID you want to search for
const personId = '66ba2e59d016174243abe91c';
findPersonById(personId);
