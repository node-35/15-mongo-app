const express = require('express');
const videogameRouter = require('./videogame.router');
const countryRouter = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use(videogameRouter);
router.use(countryRouter);

module.exports = router;
