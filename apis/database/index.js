const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dhia:123@cluster0.oo2ywwi.mongodb.net/footix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });