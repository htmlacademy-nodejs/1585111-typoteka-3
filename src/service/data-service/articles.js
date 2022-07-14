'use strict';

const {nanoid} = require(`nanoid`);
const ID_SIZE = 8;

class ArticlesService {
  constructor(articles) {
    this._articles = articles;
  }

  get() {
    return this._articles;
  }

  getOne(id) {
    const article = this._articles.find((item) => item.id === id);
    return article;
  }

  create(article) {
    const newArticle = {
      ...article,
      comments: [],
      id: nanoid(ID_SIZE)
    };

    this._articles.push(newArticle);

    return newArticle;
  }

  remove(id) {
    const article = this._articles.find((item) => item.id === id);

    if (!article) {
      return null;
    }

    this._articles = this._articles.filter((item) => item.id !== id);

    return article;
  }

  update(id, article) {
    const oldArticle = this._articles.find((item) => item.id === id);

    if (!oldArticle) {
      return null;
    }

    return Object.assign(oldArticle, article);
  }
}

module.exports = ArticlesService;
