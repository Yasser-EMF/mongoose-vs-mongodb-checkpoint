// findPeopleByName.js
const Person = require('./person');

async function findPeopleByName() {
  try {
    // Replace 'Jane Doe' with the name you want to search for
    const people = await Person.find({ name: 'Jane Doe' }).exec();
    console.log('People found:', people);
  } catch (err) {
    console.error('Error finding people:', err);
  }
}

// Call the function to execute the search
findPeopleByName();
