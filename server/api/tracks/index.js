const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Tracks router' });
});

module.exports = router;
