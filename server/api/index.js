const { Router } = require('express');

const tracks = require('./tracks/router');
const auth = require('./auth/router');

const router = Router();

router.use('/tracks', tracks);
router.use('/auth', auth);

module.exports = router;
