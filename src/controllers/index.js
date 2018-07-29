const inMemoryDB = require('../databases');
const NotesController = require('./notes');

module.exports = {
  notesController: new NotesController(inMemoryDB)
};
