import { Router } from "express";
import {getNews, getNewsByID, editNews, addNews, deleteNews} from '../controllers/news.controller.js';

const newsRouter = Router()

newsRouter.get('/', getNews)

newsRouter.get('/:id', getNewsByID)

newsRouter.put('/:id', editNews)

newsRouter.post('/', addNews)

newsRouter.delete('/:id', deleteNews);

export default newsRouter;