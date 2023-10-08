import { AppDataSource } from "../data-source.ts";
import { News } from "../entity/news.entity.ts";

interface INews {
  title: string;
  text: string;
  authodId: number;
}

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

const addNews = async (body: INews) => {
  try {
    const newPost = await AppDataSource.getRepository(News).create(body);
    const results = await AppDataSource.getRepository(News).save(newPost);

    return results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const editNews = async (id: number, body: INews) => {
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