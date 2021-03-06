'use strict';

const {HttpCode} = require(`../../constants`);

module.exports = (servise) => (req, res, next) => {
  const articles = servise.get();

  if (!articles.length) {
    return res.status(HttpCode.NOT_FOUND).send(`articles does't exist`);
  }

  res.locals.articles = articles;
  return next();
};
