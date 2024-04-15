async function readData(db) {
    const collection = db.collection('users');
    const users = await collection.find({ age: { $gt: 30 } }).toArray();
    console.log("Users over 30 years old:", users);
}

module.exports = readData;
