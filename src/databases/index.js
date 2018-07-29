// In memory DB for now until datastore layer is set up

class InMemoryDB {
  constructor() {
    this.notes = {};
    this.noteId = 1;
  }

  create(note) {
    this.notes[this.noteId] = note;
    this.noteId += 1;
    return this.noteId - 1;
  }
}

module.exports = new InMemoryDB();
