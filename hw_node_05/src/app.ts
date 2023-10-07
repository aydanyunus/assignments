import  express from "express";
import { AppDataSource } from "./data-source.ts";
import dotenv from "dotenv";
dotenv.config();
import loggingMiddleware from "./middlewares/logging.ts";
import newsRouter from "./routes/news.route.ts";

AppDataSource.initialize()
  .then(() => {
    console.log("connection has established...");
  })
  .catch((err) => {
    console.log(err, "there's an error with connection. Fix it!");
  });

const app = express();

app.use(express.json());
app.use(loggingMiddleware);
app.use("/api/newsposts", newsRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});