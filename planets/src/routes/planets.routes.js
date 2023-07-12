const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/planets/:id', controllers.getPlanet);
router.get('/planets', controllers.getListPlanets);
router.use('*', controllers.notFound);

module.exports = router;
