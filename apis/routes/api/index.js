const router = require('express').Router();
const apiUsers = require('./users');
const apiAuth = require('./auth');
const apiJoueurs = require('./Joueurs');

router.use('/users', apiUsers);
router.use('/auth', apiAuth);
router.use('/joueurs', apiJoueurs);

module.exports = router;
