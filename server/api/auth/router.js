const { Router } = require('express');

const controller = require('./controller');

const router = Router();

router.use('/register', controller.create);

module.exports = router;
