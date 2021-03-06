const express = require('express');
const controller = require('../controllers/connectionController');

const router = express.Router();


router.get('/', controller.index);


router.get('/about', controller.about);

router.get('/contact', controller.contact);


router.get('/new', controller.new);


router.post('/', controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;