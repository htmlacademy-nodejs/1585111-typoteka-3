'use strict';

const {HttpCode} = require(`../../constants`);

module.exports = (servise) => (req, res, next) => {
  const categories = servise.get();

  if (!categories.length) {
    return res.status(HttpCode.NOT_FOUND).send(`Not found`);
  }

  res.locals.categories = categories;
  return next();
};
