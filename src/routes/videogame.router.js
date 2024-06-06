const { getAll, create, getOne, remove, update } = require('../controllers/videogame.controllers');
const express = require('express');

const videogameRouter = express.Router();

videogameRouter.route('/videogames')
    .get(getAll)
    .post(create);

videogameRouter.route('/videogames/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = videogameRouter;
