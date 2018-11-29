const pgp = require('pg-promise');
const { Pool, Client } = require('pg');
const pool = new Pool();
const client = new Client({
  user: 'power_user',
  host: 'ec2-54-183-64-137.us-west-1.compute.amazonaws.com',
  database: 'udemy',
  password: 'superpw',
  port: 5432,
});

client.connect().then(() => console.log("Client successfully connected!"));


module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  client,
  pool,
 };