const express = require('express');

const app = express();

const userController = require('./controllers/user.controllers')
const bookController = require('./controllers/book.controllers');
const commentController = require('./controllers/comment.controllers');


module.exports = app;