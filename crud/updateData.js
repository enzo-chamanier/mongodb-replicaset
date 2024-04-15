async function updateData(db) {
    const collection = db.collection('users');
    const updateResult = await collection.updateMany({}, { $inc: { age: 5 } });
    console.log(updateResult.modifiedCount + " users' ages were updated.");
}

module.exports = updateData;
