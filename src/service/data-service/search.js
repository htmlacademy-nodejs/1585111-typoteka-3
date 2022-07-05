'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  get(query) {
    const articles = this._articles.filter((item) => item.title.indexOf(query) >= 0);
    return articles;
  }
}

module.exports = SearchService;
