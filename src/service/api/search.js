'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

module.exports = (app, searchService) => {
  const route = new Router();

  app.use(`/search`, route);

  route.get(`/`, (req, res) => {
    const {query = ``} = req.query;
    const title = query.trim();
    const articles = searchService.get(title);

    if (!articles.length || !title.length) {
      return res.status(HttpCode.NOT_FOUND).send(`No articles include the title`);
    }

    return res.status(HttpCode.OK).json(articles);
  });
};
