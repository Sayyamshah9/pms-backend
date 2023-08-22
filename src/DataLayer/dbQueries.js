const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017/pmsLocalDb", {
  useNewUrlParser: true,
  monitorCommands: true,
});

const createConnection = async () => {
  try {
    await client.connect();
    console.log("Database Connection Established Successfully!!");
  } catch (error) {
    console.log(error);
  }
};

const closeConnection = () => {
  try {
    console.log("Closing DB Connection");
    client.close();
  } catch (error) {
    console.log(error);
  }
};

//Queries
const insertOne = async (_collectionName, _payloadDoc) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db("pmsLocalDB")
      .collection(_collectionName)
      .insertOne(_payloadDoc);
  } catch (error) {
    return error;
  }
  return queryResponse;
};

module.exports = { createConnection, insertOne, closeConnection };
