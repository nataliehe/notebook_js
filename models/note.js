var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  note: {type: String, required: true},
  created: {
    type: Date,
    default: Date.now
  }
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
