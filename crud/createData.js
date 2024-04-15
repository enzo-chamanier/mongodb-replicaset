const faker = require('@faker-js/faker');

async function createData(db) {
    const collection = db.collection('users');
    const users = Array.from({ length: 100 }, () => ({
        name: faker.name.findName(),
        age: faker.datatype.number({ min: 18, max: 100 }),
        email: faker.internet.email(),
        createdAt: faker.date.past()
    }));

    await collection.insertMany(users);
    console.log("100 fake users inserted into the database.");
}

module.exports = createData;
