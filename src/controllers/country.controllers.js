const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const countries = await Country.find();
    return res.json(countries);
});

module.exports = {
    getAll
}