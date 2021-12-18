"use strict";

const { MongoClient } = require("mongodb");
const { MONGODB_URL, DB_NAME } = process.env;

const mongoUrl = MONGODB_URL;
let connection;

async function connectDB() {
  if (connection) return connection;

  let client;
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
    });
    connection = client.db(DB_NAME);
  } catch (error) {
    console.error("Could not connect to db", mongoUrl, error);
    process.exit(1);
  }

  return connection;
}

module.exports = connectDB;
