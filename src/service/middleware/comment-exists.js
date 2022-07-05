'use strict';

const {HttpCode} = require(`../../constants`);

module.exports = (servise) => (req, res, next) => {
  const {articleId, commentId} = req.params;
  const comment = servise.getOne(articleId, commentId);

  if (!comment) {
    res.status(HttpCode.NOT_FOUND).send(`Comment with ${commentId} id not found`);
  }

  next();
};
