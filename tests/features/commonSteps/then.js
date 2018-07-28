/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const { Then } = require('cucumber');
const chai = require('chai');

chai.should();

Then('I should get the expected status code, {int}', function (statusCode) {
  this.response.statusCode.should.eql(statusCode);
});

Then('My response should have object key, {string}', function (fieldName) {
  this.response.body.should.include.keys(fieldName);
});

Then('The key, {string}, should have value, {string}', function (fieldName, fieldValue) {
  this.response.body[fieldName].should.eql(fieldValue);
});
