import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db_config.js';
dotenv.config();

const app = express()
const port = process.env.PORT || 8100;

// database connection
dbConnection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})