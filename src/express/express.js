'use strict';

const express = require(`express`);
const mainRouter = require(`./routes/main-router`);
const myRouter = require(`./routes/my-router`);
const articlesRouter = require(`./routes/articles-router`);

const PORT = 8080;

const app = express();

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);


app.listen(PORT);
