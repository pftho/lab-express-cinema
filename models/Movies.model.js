//Creating a model to define how we want our movie collection to look like
// Models help us define how we are planning to structure our data
// What are the filds we want for our Movie collection

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// SCHEMA = HOW WE STRUCTURE THE DATA
const movieSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: [String] },
  image: { type: String },
  description: { type: String },
  showtimes: { type: [String] },
});

//THE MODAL = HOW WE CREATE THE DOCUMENT IN THE DATA BASE
// The model will help us insert the movie document in the collection
// The model that we create is defined by the schema
const Movie = mongoose.model("Movie", movieSchema);
// "Movie" -> will be the name of the collection witin the database
// "lab-express-cinema" -> is the data Base / we find this in the app.js file

// we export the Movie to be able to use it in the seed
module.exports = Movie;

// 
