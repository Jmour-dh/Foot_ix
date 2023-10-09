const UserModel = require('../../database/models/user.model');
const bcrypt = require('bcrypt');

const router = require('express').Router();

router.post('/', async (req, res) => {
  const { name, lName, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json('Email déjà utilisé');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create a new user
    const newUser = new UserModel({
      name,
      lName,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const user = await newUser.save();

    // Send the newly created user as the response
    res.status(201).json(user);
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur :', err);

    // Send a more detailed error response
    res.status(500).json({
      error: 'Oops une erreur est survenue',
      details: err.message, // Include the error message for more details
    });
  }
});



router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json('Oops une erreur est survenue');
  }
});

module.exports = router;
