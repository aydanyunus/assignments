import express from "express";
import dotenv from 'dotenv';
dotenv.config()


const app = express();


const port = process.env.PORT;
const host = process.env.HOST;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
})