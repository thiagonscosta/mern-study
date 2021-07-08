const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const multerUpload = multer(require('./config/multerConfig'));

routes.get('/posts', PostController.index);
routes.post('/posts', multerUpload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;