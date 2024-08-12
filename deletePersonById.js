const Person = require('./person');
const mongoose = require('./db'); // Import mongoose instance from db.js

// Replace with the actual person ID
const personId = '66ba2e59d016174243abe91c';

async function deletePersonById(personId) {
  try {
    // Find a person by ID and delete
    const deletedPerson = await Person.findByIdAndDelete(personId).exec();

    if (deletedPerson) {
      console.log('Deleted person:', deletedPerson);
    } else {
      console.log('No person found with the given ID.');
    }
  } catch (err) {
    console.error('Error deleting person by ID:', err);
  } finally {
    // Close the mongoose connection
    mongoose.connection.close();
  }
}

deletePersonById(personId);
