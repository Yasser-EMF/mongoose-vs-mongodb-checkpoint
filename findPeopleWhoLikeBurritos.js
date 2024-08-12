// findPeopleWhoLikeBurritos.js
const Person = require('./person');

async function findPeopleWhoLikeBurritos() {
  try {
    // Find people who like burritos, sort by name, limit to 2, and exclude age
    const people = await Person.find({ favoriteFoods: 'Burritos' })
      .sort({ name: 1 }) // Sort by name in ascending order
      .limit(2)          // Limit results to 2
      .select({ age: 0 }) // Exclude the age field
      .exec();           // Execute the query

    console.log('People who like burritos:', people);
  } catch (err) {
    console.error('Error finding people who like burritos:', err);
  }
}

// Call the function to execute the query
findPeopleWhoLikeBurritos();
