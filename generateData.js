const { MongoClient } = require('mongodb');
const faker = require('@faker-js/faker');

// Assurez-vous que l'URI inclut les bons ports et les noms de conteneur
const uri = "mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0";
const client = new MongoClient(uri);

async function generateUsers() {
  try { 
    await client.connect();
    const database = client.db('test');
    const users = database.collection('users');

    const usersToInsert = Array.from({ length: 100 }, () => ({
      name: faker.name.findName(),
      age: faker.random.number({ min: 18, max: 90 }),
      email: faker.internet.email(),
      createdAt: faker.date.past()
    }));

    await users.insertMany(usersToInsert);
    console.log("100 fake users inserted.");
  } finally {
    await client.close();
  }
}

generateUsers().catch(console.error);
