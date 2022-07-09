'use strict';

const {HttpCode} = require(`../../constants`);

const requiredFields = [`userAvatar`, `userName`, `userSurname`, `text`, `createdDate`, `title`];

module.exports = (req, res, next) => {
  const comment = req.body;
  const keys = Object.keys(comment);
  const hasKeys = keys.every((key) => requiredFields.includes(key));

  if (!hasKeys || requiredFields.length !== keys.length) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request`);
  }

  return next();
};
