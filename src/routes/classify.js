const express = require('express')
const classifyController = require('../controllers/classify.controller');

const router = express.Router();

router.post('/api/triangles/classify', classifyController);

module.exports = router;
