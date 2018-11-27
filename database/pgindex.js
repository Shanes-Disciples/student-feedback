const pgp = require('pg-promise');
const { Pool, Client } = require('pg');
const pool = new Pool();
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'udemy',
  password: 'root',
  port: 5432,
});

client.connect().then(() => console.log("Client successfully connected!"));


module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  client,
  pool,
 };