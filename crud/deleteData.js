async function deleteData(db, email) {
    const collection = db.collection('users');
    const deleteResult = await collection.deleteOne({ email: email });
    if (deleteResult.deletedCount === 1) {
        console.log("Successfully deleted one user.");
    } else {
        console.log("No users were deleted.");
    }
}

module.exports = deleteData;
