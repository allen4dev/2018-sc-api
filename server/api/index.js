const { Router } = require('express');

const tracks = require('./tracks/router');

const router = Router();

router.use('/tracks', tracks);

module.exports = router;
