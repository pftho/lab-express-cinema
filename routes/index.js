const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET movie page */
router.get("/movies", (req, res, next) => {
  const importedMovieSchema = require("../models/Movies.model.js");
  importedMovieSchema.find({}).then((movies) => {
    console.log("found them", movies);
    res.render("movies", { movies });
  });
});

router.get("/movies/:moviesId", (req, res, next) => {
  const { moviesId } = req.params;
  const importedMovieSchema = require("../models/Movies.model.js");
  importedMovieSchema.findById(moviesId).then((movie) => {
    console.log("found the movieee with the ID");
    res.render("movie", movie);
  });
});

module.exports = router;
