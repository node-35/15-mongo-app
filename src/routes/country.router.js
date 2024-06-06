const { getAll } = require('../controllers/country.controllers');
const express = require('express');

const countryRouter = express.Router();

countryRouter.route('/countries')
    .get(getAll)

module.exports = countryRouter;