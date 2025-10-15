const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.get('/', noteController.getAllNotes);

module.exports = router;