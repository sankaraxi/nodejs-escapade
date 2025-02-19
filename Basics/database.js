const { MongoClient } = require('mongodb');

const URI ="mongodb+srv://sankarfrompalani:qUK5ZmkLU8Rs9nvZ@nodejsescapade.6skti.mongodb.net/"

const client = new MongoClient(URI);

const dbName = "HelloWorld";

async function main(){
    await client.connect();
    console.log("Connected to the database");
    const db = client.db(dbName)
    const collection = db.collection("User");

    const data = {
        first_name: 'Hamara',
        last_name: 'Doremon',
        age: 21,
        dob: '2004-07-19'
    }

    // // const insertResult = await collection.insertOne(data);
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);

    // const countResult = await collection.countDocuments({});
    // console.log('Count of documents =>', countResult);

    // to find a particular document based on a condition

    const findResult = await collection.find({first_name: 'Hamara'}).toArray();
    console.log('Found documents =>', findResult);

    return "sankar";
}

main().then(console.log).catch(console.error).finally(()=>client.close());