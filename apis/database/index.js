// index.js
require('dotenv').config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

console.log("MONGO_URI:", MONGO_URI); // Ajoutez cette ligne pour le débogage

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
