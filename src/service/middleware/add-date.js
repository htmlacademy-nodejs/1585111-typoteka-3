'use strict';

const {addCurrentDate} = require(`../../utils`);

module.exports = (DateFormat) => (req, res, next) => {
  req.body = {
    ...req.body,
    createdDate: addCurrentDate(DateFormat)
  };

  next();
};
