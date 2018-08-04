class NotesController {
  constructor(databse) {
    this.db = databse;
  }

  create({ subject, body }) {
    try {
      this.note = this.db.create({ subject, body });
      return this.note;
    } catch (err) {
      // TODO: Handle errors
      return err;
    }
  }
}

module.exports = NotesController;
