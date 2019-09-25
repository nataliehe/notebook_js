var express = require('express');
var router = express.Router();
var NotesController = require('../controllers/notes');

router.get('/', NotesController.Index);
router.post('/', NotesController.Create);
router.get('/new', NotesController.New);

module.exports = router;
