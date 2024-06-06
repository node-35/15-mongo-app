const catchError = require('../utils/catchError');
const Videogame = require('../models/Videogame');

const getAll = catchError(async(req, res) => {
    const videogames = await Videogame.find();
    return res.json(videogames);
});

const create = catchError(async(req, res) => {
    const { name, genre, releaseYear } = req.body;
    const videogame = await Videogame.create({
        name,
        genre,
        releaseYear,
    });
    return res.status(201).json(videogame);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const videogame = await Videogame.findById(id);
    if (!videogame) return res.status(404).json({ message: "Videogame not found" });
    return res.json(videogame);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const videogame = await Videogame.findByIdAndDelete(id);
    if (!videogame) return res.status(404).json({ message: "Videogame not found" });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, genre, releaseYear } = req.body;
    const videogame = await Videogame.findByIdAndUpdate(id, {
        name, genre, releaseYear
    }, { new: true });
    return res.json(videogame);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}