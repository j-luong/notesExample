class BaseError {
  constructor(message) {
    this.message = message || 'no message';
  }
}

class InvalidParametersError extends BaseError {}
class DuplicateError extends BaseError {}
class MissingParametersError extends BaseError {}
class DatabaseError extends BaseError {}
class ConnectionError extends BaseError {}
class ResourceNotFoundError extends BaseError {}
class TokenExpiredError extends BaseError {}
class TokenInvalidError extends BaseError {}
class UnauthorizedError extends BaseError {}

class RESTError {
  constructor({ message, status, errors, description }) {
    this.message = message;
    this.status = status;
    this.errors = errors;
    this.description = description;
  }
}

module.exports = {
  BaseError,
  InvalidParametersError,
  DuplicateError,
  ConnectionError,
  DatabaseError,
  MissingParametersError,
  ResourceNotFoundError,
  TokenExpiredError,
  TokenInvalidError,
  UnauthorizedError,
  RESTError
};
