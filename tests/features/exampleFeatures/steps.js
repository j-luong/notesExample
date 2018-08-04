/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

const { When } = require('cucumber');

When('I hit the /ping route', async function () {
  this.response = await this.getResource({ resource: 'ping' });
});
