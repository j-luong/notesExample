const { defineParameterType, setDefaultTimeout } = require('cucumber');

// increase the default timeouts for tests
setDefaultTimeout(60 * 1000);

// define boolean parameter type
defineParameterType({
  regexp: /true|TRUE|false|FALSE/,
  transformer: boolean => JSON.parse(boolean),
  name: 'bool'
});
