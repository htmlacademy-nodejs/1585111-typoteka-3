'use strict';

const {HttpCode} = require(`../../constants`);

module.exports = (servise) => (req, res, next) => {
  const {articleId} = req.params;
  const article = servise.getOne(articleId);

  if (!article) {
    res.status(HttpCode.NOT_FOUND).send(`Article with ${articleId} id not found`);
  }

  res.locals.article = article;
  next();
};
