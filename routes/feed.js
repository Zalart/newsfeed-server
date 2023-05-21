const express = require('express');

const router = express.Router();

const feedController = require('../controllers/feed');

// publication routes
router.get('/publication', feedController.getPublications);
router.get('/publication/publicationId', feedController.getPublication);

// category routes
router.get('/category', feedController.getCategories);
router.get('/category/:categoryId', feedController.getCategory);

// tag routes
router.get('/tag', feedController.getTags);
router.get('/tag/:tagId', feedController.getTag);

module.exports = router;
