'use strict';

const express = require(`express`);
const request = require(`supertest`);
const {ArticlesService, CommentsService} = require(`../data-service`);
const articles = require(`./articles`);
const {HttpCode} = require(`../../constants`);

const mockData = [
  {
    "title": `Что такое золотое сечение`,
    "photo": ``,
    "createdDate": `2022-04-28 14:07:08`,
    "сategory": `Кино Музыка Программирование Без рамки`,
    "announce": `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
    "fullText": `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    "id": `1enV1cCA`,
    "comments": [
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `bNASp515`,
        "text": `Это где ж такие красоты? Совсем немного...`,
        "createdDate": `2022-06-25 00:20:51`,
        "title": `Что такое золотое сечение`
      },
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `woSERzzU`,
        "text": `Планируете записать видосик на эту тему? Плюсую, но слишком много буквы! Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Хочу такую же футболку :-) Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
        "createdDate": `2022-04-09 19:39:03`,
        "title": `Что такое золотое сечение`
      },
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `RLKw1zQN`,
        "text": ``,
        "createdDate": `2022-05-28 19:52:55`,
        "title": `Что такое золотое сечение`
      }
    ]
  },
  {
    "title": `Борьба с прокрастинацией`,
    "photo": ``,
    "createdDate": `2022-04-12 19:11:05`,
    "сategory": `Соседи За жизнь Проклятья Музыка IT Разное Без рамки Программирование Железо Деревья Перфоратор`,
    "announce": `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Ёлки — это не просто красивое дерево. Это прочная древесина. Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
    "fullText": `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Первая большая ёлка была установлена только в 1938 году. Как начать действовать? Для начала просто соберитесь. Какой-то текст, добафленный по заданию Он написал больше 30 хитов. Из под его пера вышло 8 платиновых альбомов. Достичь успеха помогут ежедневные повторения. Золотое сечение — соотношение двух величин, гармоническая пропорция. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Простые ежедневные упражнения помогут достичь успеха. Это один из лучших рок-музыкантов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Ёлки — это не просто красивое дерево. Это прочная древесина. Собрать камни бесконечности легко, если вы прирожденный герой.`,
    "id": `t8hTH1TR`,
    "comments": [
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `M--a-bKE`,
        "text": `Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Совсем немного... Мне кажется или я уже читал это где-то?`,
        "createdDate": `2022-05-21 20:24:35`,
        "title": `Борьба с прокрастинацией`
      },
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `yQFYR8FN`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`,
        "createdDate": `2022-06-12 18:17:22`,
        "title": `Борьба с прокрастинацией`
      },
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `qSDLACio`,
        "text": `Совсем немного... Мне кажется или я уже читал это где-то? Это где ж такие красоты? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`,
        "createdDate": `2022-05-26 13:20:04`,
        "title": `Борьба с прокрастинацией`
      }
    ]
  },
  {
    "title": `Обзор новейшего смартфона`,
    "photo": ``,
    "createdDate": `2022-05-21 06:30:27`,
    "сategory": `Перфоратор Деревья Кино Соседи Проклятья`,
    "announce": `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
    "fullText": `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Из под его пера вышло 8 платиновых альбомов. Какой-то текст, добафленный по заданию Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Достичь успеха помогут ежедневные повторения. Как начать действовать? Для начала просто соберитесь. Первая большая ёлка была установлена только в 1938 году. Программировать не настолько сложно, как об этом говорят. Ёлки — это не просто красивое дерево. Это прочная древесина. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Это один из лучших рок-музыкантов. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
    "id": `shAMvLId`,
    "comments": [
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `-hjsVjJ0`,
        "text": `Хочу такую же футболку :-) Согласен с автором! Совсем немного... Плюсую, но слишком много буквы! Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
        "createdDate": `2022-06-06 03:45:42`,
        "title": `Обзор новейшего смартфона`
      },
      {"userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `MBenRQX_`,
        "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Это где ж такие красоты? Планируете записать видосик на эту тему?`,
        "createdDate": `2022-04-26 00:45:06`,
        "title": `Обзор новейшего смартфона`
      },
      {
        "userAvatar": ``,
        "userName": ``,
        "userSurname": ``,
        "id": `jO7e47x0`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного... Согласен с автором! Планируете записать видосик на эту тему? Мне кажется или я уже читал это где-то? Плюсую, но слишком много буквы! Это где ж такие красоты?`,
        "createdDate": `2022-04-17 21:14:53`,
        "title": `Обзор новейшего смартфона`
      }
    ]
  }
];

const createMockApi = (data) => {
  const app = express();
  const cloneData = JSON.parse(JSON.stringify(data));
  app.use(express.json());
  articles(app, new ArticlesService(cloneData), new CommentsService(cloneData));
  return app;
};

describe(`Testing of getting of articles list`, () => {
  describe(`Returns articles list`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/articles`);
    });

    test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
    test(`Returns a list of 3 articles`, () => expect(response.body.length).toBe(3));
    test(`First article id is "1enV1cCA"`, () => expect(response.body[0].id).toBe(`1enV1cCA`));
  });
});

describe(`Testing of getting of an article`, () => {
  describe(`Returns an article with given id`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA`);
    });

    test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
    test(`article's title is "Что такое золотое сечение"`, () => expect(response.body.title).toBe(`Что такое золотое сечение`));
  });


  describe(`Return not found when an article doesn't exist`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/articles/Qwertyui`);
    });

    test(`Status code is 404`, () => expect(response.statusCode).toBe(HttpCode.NOT_FOUND));
  });
});


describe(`Testing of creating of a new article`, () => {
  describe(`Creates new article with correct data`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      title: `Тестовый заголовок`,
      photo: ``,
      сategory: `Тестовая категория`,
      announce: `Тестовый анонс`,
      fullText: `Тестовый фул текст`,
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles`)
        .send(newArticle);
    });

    test(`Status code is 201`, () => expect(response.statusCode).toBe(HttpCode.CREATED));
    test(`Returns article created`, () => expect(response.body).toEqual(expect.objectContaining(newArticle)));

    test(`Articles count is 4`, async () => {
      response = await request(app)
        .get(`/articles`);

      expect(response.body.length).toBe(4);
    });
  });

  describe(`Returns bad request with extra key`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      title: `Тестовый заголовок`,
      photo: ``,
      сategory: `Тестовая категория`,
      announce: `Тестовый анонс`,
      fullText: `Тестовый фул текст`,
      extraKey: `Текст лишнего поля`
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles`)
        .send(newArticle);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Articles count is 3`, async () => {
      response = await request(app)
        .get(`/articles`);

      expect(response.body.length).toBe(3);
    });
  });

  describe(`Returns bad request with invalid key`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      titl: `Тестовый заголовок`,
      photo: ``,
      сategory: `Тестовая категория`,
      announce: `Тестовый анонс`,
      fullText: `Тестовый фул текст`,
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles`)
        .send(newArticle);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Articles count is 3`, async () => {
      response = await request(app)
        .get(`/articles`);

      expect(response.body.length).toBe(3);
    });
  });
});

describe(`Testing of updating of an article`, () => {
  describe(`Updates an article with correct data`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      title: `Новый заголовок`,
      photo: ``,
      createdDate: `2022-04-28 14:07:08`,
      сategory: `Кино Музыка Программирование Без рамки`,
      announce: `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
      fullText: `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,

    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .put(`/articles/1enV1cCA`)
        .send(newArticle);
    });

    test(`Status code is 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
    test(`New title is "Новый заголовок"`, () => expect(response.body.title).toBe(`Новый заголовок`));
  });

  describe(`Returns not found with non-existent article`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      title: `Новый заголовок`,
      photo: ``,
      createdDate: `2022-04-28 14:07:08`,
      сategory: `Кино Музыка Программирование Без рамки`,
      announce: `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
      fullText: `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .put(`/articles/23nV1cCAaaaa`)
        .send(newArticle);
    });

    test(`Status code is 404`, () => {
      expect(response.statusCode).toBe(HttpCode.NOT_FOUND);
    });
  });

  describe(`Returns bad request with extra key`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      title: `Новый заголовок`,
      photo: ``,
      createdDate: `2022-04-28 14:07:08`,
      сategory: `Кино Музыка Программирование Без рамки`,
      announce: `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
      fullText: `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
      extraKey: `Текст лишнего поля`
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .put(`/articles/1enV1cCA`)
        .send(newArticle);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Invalid property doesn't exist`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA`);

      expect(response.body.hasOwnProperty(`extraKey`)).toBeFalsy();
    });
  });

  describe(`Returns bad request with invalid key`, () => {
    const app = createMockApi(mockData);
    const newArticle = {
      titl: `Новый заголовок`,
      photo: ``,
      createdDate: `2022-04-28 14:07:08`,
      сategory: `Кино Музыка Программирование Без рамки`,
      announce: `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Из под его пера вышло 8 платиновых альбомов.`,
      fullText: `Ёлки — это не просто красивое дерево. Это прочная древесина. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Достичь успеха помогут ежедневные повторения. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .put(`/articles/1enV1cCA`)
        .send(newArticle);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Invalid property doesn't exist`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA`);

      expect(response.body.hasOwnProperty(`titl`)).toBeFalsy();
    });
  });
});

describe(`Testing of removing of an article`, () => {
  describe(`API refuses to delete non-existent article`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .delete(`/articles/1enV1cCt`);
    });

    test(`Status code is 404`, async () => expect(response.statusCode).toBe(HttpCode.NOT_FOUND));
  });

  describe(`API remove an article`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .delete(`/articles/1enV1cCA`);
    });

    test(`Status code is 200`, async () => expect(response.statusCode).toBe(HttpCode.OK));

    test(`Return removed article`, () => expect(response.body.id).toBe(`1enV1cCA`));

    test(`Article has been removed`, async () => {
      response = await request(app)
      .get(`/articles/1enV1cCA`);
      expect(response.statusCode).toBe(HttpCode.NOT_FOUND);
    });
  });
});

describe(`Testing of getting of comments list`, () => {
  describe(`Returns comments list`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA/comments`);
    });

    test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
    test(`Returns a list of 3 comments`, () => expect(response.body.length).toBe(3));
    test(`First comment id is "bNASp515"`, () => expect(response.body[0].id).toBe(`bNASp515`));
  });
});

describe(`Testing of removing of comments list`, () => {
  describe(`API refuses to delete non-existent comment`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .delete(`/articles/1enV1cCA/comments/dadasggw`);
    });

    test(`Status code is 404`, async () => expect(response.statusCode).toBe(HttpCode.NOT_FOUND));
  });

  describe(`API remove a comment`, () => {
    const app = createMockApi(mockData);
    let response;

    beforeAll(async () => {
      response = await request(app)
        .delete(`/articles/1enV1cCA/comments/bNASp515`);
    });

    test(`Status code is 200`, async () => expect(response.statusCode).toBe(HttpCode.OK));

    test(`Return removed comment`, () => expect(response.body.id).toBe(`bNASp515`));

    test(`Article has been removed`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA/comments/bNASp515`);
      expect(response.statusCode).toBe(HttpCode.NOT_FOUND);
    });
  });
});

describe(`Testing of creating of a new comment`, () => {
  describe(`Creates new article with correct data`, () => {
    const app = createMockApi(mockData);
    const newComment = {
      userAvatar: ``,
      userName: ``,
      userSurname: ``,
      text: `Это где ж такие красоты? Совсем немного...`,
      title: `Что такое золотое сечение`
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles/1enV1cCA/comments/`)
        .send(newComment);
    });

    test(`Status code is 201`, () => expect(response.statusCode).toBe(HttpCode.CREATED));
    test(`Returns comment created`, () => expect(response.body).toEqual(expect.objectContaining(newComment)));

    test(`Comments count is 4`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA/comments/`);

      expect(response.body.length).toBe(4);
    });
  });

  describe(`Returns bad request with extra key`, () => {
    const app = createMockApi(mockData);
    const newComment = {
      userAvatar: ``,
      userName: ``,
      userSurname: ``,
      text: `Это где ж такие красоты? Совсем немного...`,
      title: `Что такое золотое сечение`,
      extraKey: ``
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles/1enV1cCA/comments/`)
        .send(newComment);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Comments count is 3`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA/comments/`);

      expect(response.body.length).toBe(3);
    });
  });

  describe(`Returns bad request with invalid key`, () => {
    const app = createMockApi(mockData);
    const newComment = {
      avatar: ``,
      userName: ``,
      userSurname: ``,
      text: `Это где ж такие красоты? Совсем немного...`,
      title: `Что такое золотое сечение`
    };
    let response;

    beforeAll(async () => {
      response = await request(app)
        .post(`/articles/1enV1cCA/comments/`)
        .send(newComment);
    });

    test(`Status code is 400`, () => expect(response.statusCode).toBe(HttpCode.BAD_REQUEST));

    test(`Comments count is 3`, async () => {
      response = await request(app)
        .get(`/articles/1enV1cCA/comments/`);

      expect(response.body.length).toBe(3);
    });
  });
});

