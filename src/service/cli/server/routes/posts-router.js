'use strict';

const {Router} = require(`express`);
const {readFile} = require(`fs/promises`);

const FILE_NAME = `mock.json`;


const postsRouter = new Router();

postsRouter.get(`/`, async (req, res) => {
  try {
    const content = await readFile(FILE_NAME);
    const posts = JSON.parse(content);
    res.json(posts);
  } catch (err) {
    res.send([]);
  }
});

module.exports = postsRouter;
