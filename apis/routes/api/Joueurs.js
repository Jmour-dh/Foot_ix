const JoueurModel = require("../../database/models/joueur.model");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const {
    jerseyNumber,
    firstname,
    lastname,
    age,
    dateOfBirth,
    height,
    country,
    countryFlag,
    currentClub,
    currentClubLogo,
    atCurrentClubSince,
    position,
    appearancesForCurrentClub,
    goalsConcededForCurrentClub,
    cleanSheetsForCurrentClub,
    photo,
  } = req.body;

  try {
    // Check if the jerseyNumber , firstname , age , dateOfBirth is already in use
    const existingJoueur = await JoueurModel.findOne({
      jerseyNumber,
      firstname,
      lastname,
      age,
      dateOfBirth,
    });
    0;
    if (existingJoueur) {
      return res.status(400).json("jerseyNumber déjà utilisé");
    }

    // Create a new joueur
    const newJoueur = new JoueurModel({
      jerseyNumber,
      firstname,
      lastname,
      age,
      dateOfBirth,
      height,
      country,
      countryFlag,
      currentClub,
      currentClubLogo,
      atCurrentClubSince,
      position,
      appearancesForCurrentClub,
      goalsConcededForCurrentClub,
      cleanSheetsForCurrentClub,
      photo,
    });

    // Save the new joueur to the database
    const joueur = await newJoueur.save();

    // Send the newly created joueur as the response
    res.status(201).json(joueur);
  } catch (err) {
    console.error("Erreur lors de la création de l'utilisateur :", err);

    // Send a more detailed error response
    res.status(500).json({
      error: "Oops une erreur est survenue",
      details: err.message, // Include the error message for more details
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const joueurs = await JoueurModel.find();
    res.json(joueurs);
  } catch (err) {
    console.error(err);
    res.status(500).json("Oops une erreur est survenue");
  }
});

// delete un joueur

router.delete("/:id", async (req, res) => {
  const joueurId = req.params.id;

  try {
    // Vérifier si le joueur existe
    const existingJoueur = await JoueurModel.findById(joueurId);
    if (!existingJoueur) {
      return res.status(404).json("Joueur non trouvé");
    }

    // Supprimer le joueur de la base de données
    await JoueurModel.deleteOne({ _id: joueurId });

    // Envoyer une réponse indiquant que le joueur a été supprimé avec succès
    res.status(200).json("Joueur supprimé avec succès");
  } catch (err) {
    console.error("Erreur lors de la suppression du joueur :", err);

    // Envoyer une réponse d'erreur détaillée
    res.status(500).json({
      error: "Oops, une erreur est survenue lors de la suppression du joueur",
      details: err.message,
    });
  }
});

module.exports = router;
