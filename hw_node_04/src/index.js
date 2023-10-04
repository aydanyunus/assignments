import news from './data.js';
import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import loggingMiddleware from './middlewares/logger.js';

const app = express();
app.use(express.json())
app.use(loggingMiddleware);



const port = process.env.PORT;
const host = process.env.HOST;



app.get('/api/newsposts', (req, res) => {
  const { page, size } = req.query

  try {

    const startIndex = (page - 1) * size;
    const endIndex = page * size;

    if (!isNaN(page) && !isNaN(size)) {
      const data = news.slice(startIndex, endIndex);

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(200).json([]);
      }

    }
    else {
      res.status(400).json({ error: "Invalid page or size parameters" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.get('/api/newsposts/:id', (req, res) => {
  const { id } = req.params
  try {
    if (!isNaN(id)) {
      const selectedData = news.find((data) => data.id === +id)
      if (selectedData) {
        res.status(200).json(selectedData);

      } else {
        res.status(404).json('News post not found');
      }
    } else {
      res.status(404).json('ID not found');

    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }


})

app.put('/api/newsposts/:id', (req, res) => {
  const { id } = req.params
  if (id) {
    const selectedNewsIndex = news.findIndex((data) => data.id === +id);
    if (selectedNewsIndex !== -1) {

      const editedNews = {
        ...news[selectedNewsIndex],
        ...req.body
      };

      news.splice(selectedNewsIndex, 1, editedNews);

      res.json(editedNews);
    }
    else {
      res.status(404).json({ error: 'Not found' });
    }
  }
  res.status(400).json({ error: 'Invalid ID' });


});


app.post('/api/newsposts', (req, res) => {
  const id = news[news.length - 1].id + 1;
  if (req.body) {
    news.push({ ...req.body, id })
    res.json({ message: 'Added successfully' });

  } else {
    return res.status(400).json({ error: 'Request body is missing.' });
  }

})

app.delete('/api/newsposts/:id', (req, res) => {
  const id = req.params.id;
  try {
    if (!isNaN(id)) {
      return res.status(200).json(news.filter((data) => data.id !== +id));
    } else {
      res.status(404).json({ message: 'News post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
})