const { MongoClient } = require('mongodb');

async function testConnection() {
    const uri = 'mongodb+srv://mmtpsteam:Mani%402024@doctors.t4ou6.mongodb.net/Patients?retryWrites=true&w=majority&tls=true';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");

        const database = client.db('Patients');
        const collection = database.collection('Patients Details'); // Replace with your actual collection name

        // Sample document to insert
        const doc = { name: "John Doe", age: 30, diagnosis: "Flu" };
        const result = await collection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        // Fetch and display documents from the collection
        const documents = await collection.find({}).toArray(); // Fetch all documents
        console.log("Documents fetched:", documents);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

testConnection();
