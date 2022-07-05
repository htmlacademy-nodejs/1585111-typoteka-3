'use strict';

const {HttpCode} = require(`../../constants`);

const requiredFields = [`title`, `photo`, `createdDate`, `сategory`, `announce`, `fullText`];

module.exports = (req, res, next) => {
  const article = req.body;
  const keys = Object.keys(article);
  const hasKeys = keys.every((key) => requiredFields.includes(key));

  if (!hasKeys || requiredFields.length !== keys.length) {
    res.status(HttpCode.BAD_REQUEST).send(`Bad request`);
  } else {
    next();
  }
};
