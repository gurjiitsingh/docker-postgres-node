const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname,'development.env')
});

const express = require('express');
const { Pool, Client } = require('pg');
// Constants
const PORT = 3000;
const HOST = 'localhost';
// App
const app = express();



// const conectionString='postgres://postgres:postgres@localhost:5434/next-payload-3'
// const client= new Client({
//     connectionString:conectionString
// })

// client.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   })



var pg = require('pg');
var conString = process.env.POSTGRES_URL;
var client = new pg.Client(conString);
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.get('/', (req, res) => {
  res.send('Hello World App');
});

app.listen(PORT, (req, res)=>{
  console.log(`Sever Running on http://${HOST}:${PORT}`);
});




// import { postgresAdapter } from '@payloadcms/db-postgres'

// db: postgresAdapter({
//   pool: {
//     connectionString: process.env.POSTGRES_URL,
//   },
// })




// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: "postgres://postgres:postgres@localhost:5432/onlinestore",
// });



// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'pgdb',
//   password: '6565',
//   port: 5432,
// });

// client.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


// client.query('SELECT NOW()', (err, res) => {
//   console.log("Error or response:: ", err, res)
//   client.end()
// });