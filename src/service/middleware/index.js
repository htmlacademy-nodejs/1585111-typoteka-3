'use strict';

const articleExists = require(`./article-exists`);
const articlesExist = require(`./articles-exist`);
const addDate = require(`./add-date`);
const validateArticle = require(`./article-validator`);
const validateComment = require(`./comment-validator`);
const categoriesExist = require(`./categories-exist`);
const commentExists = require(`./comment-exists`);

module.exports = {
  articleExists,
  articlesExist,
  addDate,
  validateArticle,
  validateComment,
  categoriesExist,
  commentExists
};
