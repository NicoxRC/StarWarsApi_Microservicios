const { Router } = require('express');
const controllers = require('../controller');

const router = Router();

router.get('/:model', controllers.list);
router.get('/:model/:id', controllers.get);
// router.use('*', controllers.notFound);

module.exports = router;
