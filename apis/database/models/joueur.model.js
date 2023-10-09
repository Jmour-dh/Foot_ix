const mongoose = require("mongoose");

const joueurSchema = mongoose.Schema({
  jerseyNumber: String,
  firstname: String,
  lastname: String,
  age: String,
  dateOfBirth: Date,
  height: String,
  country: String,
  countryFlag: String,
  currentClub: String,
  currentClubLogo: String,
  atCurrentClubSince: Date,
  position: String,
  appearancesForCurrentClub: String,
  goalsConcededForCurrentClub: String,
  cleanSheetsForCurrentClub: String,
  photo: String,
});

const JoueurModel = mongoose.model("joueur", joueurSchema);

module.exports = JoueurModel;
