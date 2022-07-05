'use strict';

class CategoriesService {
  constructor(articles) {
    this._articles = articles;
  }

  get() {
    const categories = this._articles.reduce((acc, item) => {
      acc.add(item.сategory);
      return acc;
    }, new Set());

    return [...categories];
  }
}

module.exports = CategoriesService;
