const { Note } = require('../models');
const { DBAdapter } = require('./db');

class NoteTransformer {
  static toDatabase(note) {
    if (!(note instanceof Note)) {
      throw new TypeError();
    }
    return {
      id: note.id,
      subject: JSON.stringify(note.subject),
      body: JSON.stringify(note.body)
    };
  }

  static fromDatabase(data) {
    return new Note()
      .setId(data.id)
      .setSubject(data.subject)
      .setBody(data.body)
      .setCreatedOn(data.created_on);
  }
}

class NoteDB extends DBAdapter {}

module.exports = {
  NoteTransformer,
  NoteDB
};
