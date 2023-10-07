import { Router } from "express";
import newsService from "../services/news.service.ts";

const newsRouter = Router();

newsRouter.get("/", async (req, res) => {
  const news = await newsService.getNews();
  res.setHeader("content-type", "application/json").json(news);
});

newsRouter.get('/:id', async (req,res)=> {
  const news = await newsService.getNewsByID(+req.params.id);
  res.setHeader("content-type", "application/json").json(news);
})


newsRouter.post('/',async (req, res) => {
  const newPost = await newsService.addNews(req.body);
  res.status(200).json({ msg: "created!", newPost }); 
} )


// newsRouter.get('/:id', )
// newsRouter.put('/:id', )
// newsRouter.delete('/:id', );

export default newsRouter;
