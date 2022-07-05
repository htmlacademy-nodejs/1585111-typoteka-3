'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const {categoriesExist} = require(`../middleware`);

module.exports = (app, categoriesService) => {
  const route = new Router();

  app.use(`/categories`, categoriesExist(categoriesService), route);

  route.get(`/`, (req, res) => {
    const {categories} = res.locals;
    res.status(HttpCode.OK).json(categories);
  });
};
