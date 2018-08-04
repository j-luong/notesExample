/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const { Given, When } = require('cucumber');

Given('I have a subject {string}', async function (subject) {
  this.subject = subject;
});

Given('I have body {string}', async function (body) {
  this.body = body;
});

When('I create a note', async function () {
  try {
    this.response = await this.createNote({
      subject: 'Test note',
      body: 'Hello world!'
    });
  } catch (err) {
    this.response = err;
  }
});
