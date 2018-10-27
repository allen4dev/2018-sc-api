const { Router } = require('express');

const controller = require('./controller');

const router = Router();

router.get('/', controller.show);
router.post('/', controller.create);

module.exports = router;
