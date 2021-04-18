const express = require('express')
const pastSearchesController = require('../controllers/pastSearches.controller');

const router = express.Router();

router.get('/api/triangles/pastSearches', pastSearchesController);

module.exports = router;