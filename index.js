const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const dbName = "myproject";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const createData = require('./crud/createData');
const readData = require('./crud/readData');
const updateData = require('./crud/updateData');
const deleteData = require('./crud/deleteData');

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);

        // Insérer des données
        await createData(db);

        // // Lire des données
        // await readData(db);

        // // Mettre à jour des données
        // await updateData(db);

        // // Supprimer un utilisateur spécifique
        // await deleteData(db, 'user@example.com'); // Remplacez par l'email réel à supprimer

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
