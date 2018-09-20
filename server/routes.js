const express = require('express');
const router = express.Router();
const handlers = require('./controller.js');

router.get('/allPictures', handlers.getAllPhotos);
router.get('/filteredPictures/:author', handlers.getfilteredByAuthorPhotos);

module.exports = router;