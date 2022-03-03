'use strict';

const {Router} = require(`express`);

const myRoutes = new Router();

myRoutes.get(`/`, (req, res) => res.send(`/my`));
myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));
myRoutes.get(`/categorie`, (req, res) => res.send(`/my/categorie`));

module.exports = myRoutes;
