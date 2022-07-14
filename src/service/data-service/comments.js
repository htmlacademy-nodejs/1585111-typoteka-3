'use strict';

const {nanoid} = require(`nanoid`);
const ID_SIZE = 8;

class CommentsService {
  constructor(articles) {
    this._articles = articles;
  }

  get(articleId) {
    const article = this._articles.find((item) => item.id === articleId);
    return article.comments;
  }

  getOne(articleId, commentId) {
    const comments = this.get(articleId);
    const comment = comments.find((item) => item.id === commentId);
    return comment;
  }

  create(articleId, comment) {
    const article = this._articles.find((item) => item.id === articleId);
    const newComment = {
      id: nanoid(ID_SIZE),
      ...comment
    };

    article.comments.push(newComment);

    return newComment;
  }

  remove(articleId, commentId) {
    const article = this._articles.find((item) => item.id === articleId);
    const comment = article.comments.find((item) => item.id === commentId);

    if (!comment) {
      return null;
    }

    article.comments = article.comments.filter((item) => item.id !== commentId);
    return comment;
  }
}

module.exports = CommentsService;
