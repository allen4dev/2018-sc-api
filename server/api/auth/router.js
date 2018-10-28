const { Router } = require('express');
const passport = require('passport');

const controller = require('./controller');

const router = Router();

router.post('/register', controller.create);
router.post('/login', passport.authenticate('local'), controller.show);

module.exports = router;
