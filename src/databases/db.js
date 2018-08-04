const { ResourceNotFoundError } = require('../errors');
const ErrorChecker = require('./errorchecker');

class DBAdapter {
  constructor({ knexPool, table, transformer }) {
    this.knex = knexPool;
    this.table = table;
    this.toDatabase = transformer.toDatabase;
    this.fromDatabase = transformer.fromDatabase;
  }
  async create({ model }) {
    try {
      const dbModel = this.toDatabase(model);
      const result = await this.knex(this.table)
        .insert(dbModel).returning('*');
      return this.fromDatabase(result[0]);
    } catch (e) {
      throw ErrorChecker.getDbError(e);
    }
  }

  async get({ id }) {
    try {
      const data = await this.knex(this.table)
        .select('*')
        .where({ id });

      if (data.length === 0) {
        throw new ResourceNotFoundError();
      }
      return this.fromDatabase(data[0]);
    } catch (e) {
      throw ErrorChecker.getDbError(e);
    }
  }

  async list() {
    try {
      const models = await this.knex(this.table)
        .select('*')
        .orderBy('created_on', 'desc')
        .map(this.fromDatabase);

      return models;
    } catch (e) {
      throw ErrorChecker.getDbError(e);
    }
  }

  async update({ id, keyValues }) {
    try {
      const model = await this.knex(this.table)
        .update(this.toDatabase(keyValues), '*')
        .where({ id })
        .then((data) => {
          if (data.length === 0) {
            throw new ResourceNotFoundError();
          }
          return this.fromDatabase(data[0]);
        });
      return model;
    } catch (e) {
      throw ErrorChecker.getDbError(e);
    }
  }

  async delete({ id }) {
    try {
      const deletedCount = await this.knex(this.table)
        .where({ id })
        .del();
      if (!deletedCount) {
        throw new ResourceNotFoundError();
      }
      return null;
    } catch (e) {
      throw ErrorChecker.getDbError(e);
    }
  }
}

module.exports = {
  DBAdapter
};
