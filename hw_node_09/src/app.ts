import express from "express";
import { AppDataSource } from "./data-source.ts";
import dotenv from "dotenv";
dotenv.config();
import loggingMiddleware from "./middlewares/logging.ts";
import newsRouter from "./routes/news.route.ts";
import userRouter from "./routes/user.route.ts";
import passport from "./passport.ts";
import authenticate from "./middlewares/auth.ts";
import { dirname } from 'path'
import { fileURLToPath } from "url";

const initApp = async () => {
  try {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Connection has established...");
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.error(err, "There's an error with the connection. Fix it!");
  }
};

(async () => {
  await initApp();
})();

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(loggingMiddleware);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs'); 

app.use(express.static(__dirname + '/views'));

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.get('/news', (req, res) => {
  res.render('news');
});



app.use("/api/newsposts",authenticate, newsRouter);
app.use("/auth", userRouter);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
