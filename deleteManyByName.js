const Person = require('./person');
const mongoose = require('./db'); // Import mongoose instance from db.js

async function deleteManyByName(name) {
  try {
    // Delete multiple people with the given name
    const result = await Person.deleteMany({ name }).exec();

    console.log('Delete result:', result);
  } catch (err) {
    console.error('Error deleting people:', err);
  } finally {
    // Close the mongoose connection
    mongoose.connection.close();
  }
}

// Call the function to delete people named "Mary"
deleteManyByName('Jane Doe');
