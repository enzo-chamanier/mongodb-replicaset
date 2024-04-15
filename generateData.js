const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

for (let i = 0; i < 100; i++) {
  const user = {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 90 }),
    email: faker.internet.email(),
    createdAt: faker.date.past()
  };

  console.log(user);
}


// const uri = "mongodb://localhost:27017/test";
// const client = new MongoClient(uri);

// async function generateUsers() {
//   try {
//     await client.connect();
//     const database = client.db('test');
//     const users = database.collection('users');

//     const usersToInsert = Array.from({ length: 100 }, () => ({
//       name: faker.name.findName(),
//       age: faker.datatype.number({ min: 18, max: 90 }),
//       email: faker.internet.email(),
//       createdAt: faker.date.past()
//     }));

//     await users.insertMany(usersToInsert);
//     console.log("100 fake users inserted.");
//   } finally {
//     await client.close();
//   }
// }

// generateUsers().catch(console.error);

