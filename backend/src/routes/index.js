const express = require('express');
const router = express.Router();
const controller = require('../controller/artist')

router.get('/profile/:id',controller.index);
router.post('/artist',controller.artistas);

module.exports  = router;