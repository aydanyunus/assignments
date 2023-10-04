import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import loggingMiddleware from './middlewares/logging.js';
import newsRouter from "./routes/news.route.js";

const app = express();

app.use(express.json())
app.use(loggingMiddleware);
app.use('/api/newsposts', newsRouter)


const port = process.env.PORT;
const host = process.env.HOST;


app.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
})