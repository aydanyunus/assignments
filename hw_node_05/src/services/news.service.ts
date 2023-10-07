import { AppDataSource } from "../data-source.ts";
import { News } from "../entity/news.entity.ts";

interface IPost {
    title: string,
    text: string
}

const getNews = async () => {
  const news = await AppDataSource.getRepository(News).find();
  return news;
};

const getNewsByID = async (id: number) => {
  const news = await AppDataSource.getRepository(News).findOneBy({ id });
  return news;
};

const addNews = async (body: IPost) => {
    const newPost = await AppDataSource.getRepository(News).create(body);
    const result = await AppDataSource.getRepository(News).save(newPost);
    return result;
  };

export default {
  getNews,
  getNewsByID,
  addNews
};
