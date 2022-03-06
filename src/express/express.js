'use strict';

const path = require(`path`);
const express = require(`express`);
const mainRouter = require(`./routes/main-router`);
const myRouter = require(`./routes/my-router`);
const articlesRouter = require(`./routes/articles-router`);

const PORT = 8080;

const app = express();
app.set(`views`, path.resolve(__dirname, `templates/pages`));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, `public`)));

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);


app.listen(PORT);
