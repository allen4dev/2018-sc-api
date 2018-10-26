const { Router } = require('express');

const tracks = require('./tracks');

const router = Router();

router.use('/tracks', tracks);

module.exports = router;
