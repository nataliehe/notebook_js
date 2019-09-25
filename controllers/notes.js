var Note = require('../models/note');

var NotesController = {
  Index: (req, res) => {
    Note.find((err, notes) => {
      if (err) { throw err; }
      res.render('notes', { notes: notes });
    });
  },
  New: (req, res) => {
    res.render('new');
  },
  Create: (req, res) => {
    var note = new Note({note: req.body.note, created: req.body.created});
    note.save((err) => {
      if (err) { throw err; }
      res.status(201).redirect('/notes');
    });
  }
};

module.exports = NotesController;
