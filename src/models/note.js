const uuid = require('uuid/v4');

class Note {
  constructor() {
    this.id = uuid();
    this.subject = undefined;
    this.body = undefined;
    this.createdOn = undefined;
    this.updatedOn = undefined;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setSubject(subject) {
    this.subject = subject;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  setCreatedOn(createdOn) {
    this.createdOn = new Date(createdOn);
    return this;
  }

  setUpdatedOn(updatedOn) {
    this.updatedOn = new Date(updatedOn);
    return this;
  }
}

module.exports = {
  Note
};
