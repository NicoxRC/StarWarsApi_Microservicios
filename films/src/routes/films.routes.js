const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/films/:id', controllers.getFilm);
router.get('/films', controllers.getListFilm);
router.use('*', controllers.notFound);

module.exports = router;
