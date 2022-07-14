'use strict';

const express = require(`express`);
const request = require(`supertest`);
const {CategoriesService} = require(`../data-service`);
const categories = require(`./categories`);
const {HttpCode} = require(`../../constants`);

const mockData = [
  {
    "title": `Что такое золотое сечение`,
    "photo": ``,
    "createdDate": `2022-04-28 14:07:08`,
    "сategory": `Кино`,
    "announce": `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
    "fullText": `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    "id": `1enV1cCA`,
  },
  {
    "title": `Борьба с прокрастинацией`,
    "photo": ``,
    "createdDate": `2022-04-12 19:11:05`,
    "сategory": `Музыка`,
    "fullText": `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Первая большая ёлка была установлена только в 1938 году. Как начать действовать? Для начала просто соберитесь. Какой-то текст, добафленный по заданию Он написал больше 30 хитов. Из под его пера вышло 8 платиновых альбомов. Достичь успеха помогут ежедневные повторения. Золотое сечение — соотношение двух величин, гармоническая пропорция. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Простые ежедневные упражнения помогут достичь успеха. Это один из лучших рок-музыкантов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Ёлки — это не просто красивое дерево. Это прочная древесина. Собрать камни бесконечности легко, если вы прирожденный герой.`,
    "id": `t8hTH1TR`,
  },
  {
    "title": `Обзор новейшего смартфона`,
    "photo": ``,
    "createdDate": `2022-05-21 06:30:27`,
    "сategory": `Музыка`,
    "announce": `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
    "fullText": `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Из под его пера вышло 8 платиновых альбомов. Какой-то текст, добафленный по заданию Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Достичь успеха помогут ежедневные повторения. Как начать действовать? Для начала просто соберитесь. Первая большая ёлка была установлена только в 1938 году. Программировать не настолько сложно, как об этом говорят. Ёлки — это не просто красивое дерево. Это прочная древесина. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Это один из лучших рок-музыкантов. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
    "id": `shAMvLId`,
  }
];

const createMockApi = () => {
  const app = express();
  const cloneData = JSON.parse(JSON.stringify(mockData));
  app.use(express.json());
  categories(app, new CategoriesService(cloneData));
  return app;
};

describe(`Api returns correct category list`, () => {
  const app = createMockApi();

  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/categories`);
  });
  test(`Status code is 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`List length is 2`, () => expect(response.body.length).toBe(2));
  test(`Category names are "Кино", "Музыка"`, () => expect(response.body).toEqual([`Кино`, `Музыка`]));
});
