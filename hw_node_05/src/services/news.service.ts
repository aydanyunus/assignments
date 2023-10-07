import { AppDataSource } from "../data-source.ts";
import { News } from "../entity/news.entity.ts";



const getNews = async ({ page, size }) => {
  const news = await AppDataSource.getRepository(News).find();

  const startIndex = (page - 1) * size;
  const endIndex = page * size;
  const data = news.slice(startIndex, endIndex);
  return data;
};

const getNewsByID = async (id: number) => {
  const news = await AppDataSource.getRepository(News).findOneBy({ id });
  return news;
};

const addNews = async (body) => {
  const newPost = await AppDataSource.getRepository(News).create(body);
    const results = await AppDataSource.getRepository(News).save(newPost)
    return results
}

const editNews = async (id: number, body) => {
  const editedNews = await AppDataSource.getRepository(News).findOneBy({
    id,
  });
  AppDataSource.getRepository(News).merge(editedNews, body);
  const result = await AppDataSource.getRepository(News).save(editedNews);
  return result;
};

const deleteNews = async (id: number) => {
  const results = await AppDataSource.getRepository(News).delete(id);
  return results;
};

export default {
  getNews,
  getNewsByID,
  addNews,
  editNews,
  deleteNews,
};
