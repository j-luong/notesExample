const db = require('../databases');
const NotesController = require('./notes');

module.exports = {
  notesController: new NotesController(db.note)
};
