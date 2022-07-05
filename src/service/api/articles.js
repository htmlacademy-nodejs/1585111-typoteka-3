'use strict';

const {Router} = require(`express`);
const {HttpCode, DateFormat} = require(`../../constants`);
const {
  articleExists,
  articlesExist,
  addDate,
  validateArticle,
  validateComment,
  commentExists
} = require(`../middleware`);

module.exports = (app, articlesService, commentsService) => {
  const route = new Router();

  app.use(`/articles`, route);

  route.get(`/`, articlesExist(articlesService), (req, res) => {
    const {articles} = res.locals;

    return res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleId`, articleExists(articlesService), (req, res) => {
    const {article} = res.locals;
    res.status(HttpCode.OK).json(article);
  });

  route.post(`/`, [addDate(DateFormat.SHORT), validateArticle], (req, res) => {
    const article = req.body;
    const newArticle = articlesService.create(article);
    res.status(HttpCode.CREATED).json(newArticle);
  });

  route.put(`/:articleId`, validateArticle, (req, res) => {
    const {articleId} = req.params;
    const article = req.body;
    const newArticle = articlesService.update(articleId, article);

    if (!newArticle) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found with id ${articleId}`);
    }

    return res.status(HttpCode.OK).json(newArticle);
  });

  route.delete(`/:articleId`, articleExists(articlesService), (req, res) => {
    const {articleId} = req.params;
    const articles = articlesService.remove(articleId);
    return res.status(HttpCode.OK).json(articles);
  });


  route.get(`/:articleId/comments`, articleExists(articlesService), (req, res) => {
    const {articleId} = req.params;
    const comments = commentsService.get(articleId);
    return res.status(HttpCode.OK).json(comments);
  });

  route.delete(`/:articleId/comments/:commentId`, [articleExists(articlesService), commentExists(commentsService)], (req, res) => {
    const {articleId, commentId} = req.params;
    const comments = commentsService.remove(articleId, commentId);
    return res.status(HttpCode.OK).json(comments);
  });

  route.post(`/:articleId/comments`, [articleExists(articlesService), addDate(DateFormat.FULL), validateComment], (req, res) => {
    const {articleId} = req.params;
    const comment = req.body;
    const newComment = commentsService.create(articleId, comment);

    return res.status(HttpCode.CREATED).json(newComment);
  });
};
