const knex = require('knex');
const config = require('../config');
const { NoteDB, NoteTransformer } = require('./note');

const { types } = require('pg');
// fixes issue with integers being returned as strings
types.setTypeParser(20, val => parseInt(val, 10));

const knexPool = knex({
  client: 'pg',
  version: '0.0',
  connection: {
    user: config.database.user,
    password: config.database.password,
    host: config.database.host,
    database: config.database.name,
    port: config.database.port
  },
  pool: config.database.pool_size,
  acquireConnectionTimeout: config.database.acquire_connection_timeout
});

const note = new NoteDB({
  knexPool,
  mainTable: 'notes',
  transformer: NoteTransformer
});

module.exports = {
  note
};
