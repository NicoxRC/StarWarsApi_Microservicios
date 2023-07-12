const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/Character', controllers.listCharacter);
router.get('/Character/:id', controllers.getCharacter);
router.get('/Film', controllers.listFilm);
router.get('/Film/:id', controllers.getFilm);
router.get('/Planet', controllers.listPlanet);
router.get('/Planet/:id', controllers.getPlanet);
router.use('*', controllers.notFound);

module.exports = router;
