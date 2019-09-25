var mongoose = require('mongoose');
require('./mongodb_helper');
var Note = require('.././models/note');

describe('Note model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.notes.drop(() => {
      done();
    });
  });

  it('has a note', () => {
    var note = new Note({ note: 'some note', created: Date.now });
    expect(note.note).toEqual('some note');
  });

  it('can list all notes', (done) => {
    var note1 = new Note({ note: 'first note', created: "2019-09-17" });
    var note2 = new Note({ note: 'second note', created: "2019-09-18" });
    note1.save((err) => {
      expect(err).toBeNull();
    });
    note2.save((err) => {
      expect(err).toBeNull();
    });
    Note.find((err, notes) => {
      expect(err).toBeNull();
      console.log(notes);
      // expect(notes).toEqual([]);
      expect(notes.length).toEqual(2);
      expect(notes[0].note).toEqual(note1.note);
      expect(notes[0].created).toEqual(note1.created);
      expect(notes[1].note).toEqual(note2.note);
      expect(notes[1].created).toEqual(note2.created);
      done();
    });
  });

  it('can save a note', (done) => {
    var note = new Note({ note: 'some note', created: "2019-09-17" });
    note.save((err) => {
      expect(err).toBeNull();
      Note.find((err, notes) => {
        expect(err).toBeNull();
        expect(notes[0].note).toEqual(note.note);
        expect(notes[0].created).toEqual(note.created);
        done();
      });
    });
  });
});
