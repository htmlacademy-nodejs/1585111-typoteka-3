'use strict';

const {Router} = require(`express`);
const getMocksData = require(`../lib/get-mocks-data`);
const articles = require(`./articles`);
const categories = require(`./categories`);
const search = require(`./search`);

const {
  ArticlesService,
  CommentsService,
  CategoriesService,
  SearchService,
} = require(`../data-service`);

const app = new Router();

(async () => {
  const mockData = await getMocksData();

  articles(app, new ArticlesService(mockData), new CommentsService(mockData));
  categories(app, new CategoriesService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;
