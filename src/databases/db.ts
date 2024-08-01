import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
const client = new MongoClient(url);

async function connect() {
  await client.connect();
  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);
  return db;
}

function disconnect() {
  client.close();
}

export { connect, disconnect };