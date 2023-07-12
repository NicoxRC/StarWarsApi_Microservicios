const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/characters/:id', controllers.getCharacter);
router.get('/characters', controllers.getListCharacters);
router.use('*', controllers.notFound);

module.exports = router;
