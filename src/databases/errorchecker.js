const {
  BaseError,
  ConnectionError,
  DuplicateError,
  DatabaseError,
  InvalidParametersError,
  MissingParametersError
} = require('../errors');

class ErrorChecker {
  static getDbError(err) {
    let error = err; // eslint rule: no-param-reassign
    if (error instanceof BaseError) return error;
    switch (error.code) {
      case ('ECONNREFUSED'):
        error = new ConnectionError();
        break;
      case ('23505'):
        error = new DuplicateError();
        break;
      case ('23502'):
        error = new MissingParametersError();
        break;
      case ('08P01'):
      case ('XX000'):
      case ('42703'):
      case ('22003'):
        error = new InvalidParametersError();
        break;
      case ('42P01'):
        error = new DatabaseError();
        break;
      default:
        error = new DatabaseError();
    }
    return error;
  }
}

module.exports = ErrorChecker;
