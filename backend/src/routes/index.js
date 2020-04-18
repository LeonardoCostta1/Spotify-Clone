const express = require('express');
const router = express.Router();
const controller = require('../controller/artist')

router.post('/profile/:id',controller.index);
router.post('/artist',controller.artistas);
router.get('/artist',controller.multiple);

module.exports  = router;