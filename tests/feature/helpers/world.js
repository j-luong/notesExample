const { setWorldConstructor } = require('cucumber');
const request = require('supertest');
const app = require('../../../src');

class ApiAdapter {
  constructor() {
    this.url = process.env.targetURL || 'http://localhost:3000';
  }

  async postRequest({ resource, payload }) {
    try {
      this.req = await request(app)
        .post(`${this.url}/${resource}`)
        .set('Content-Type', 'application/json')
        .send(payload)
        .then(response => response);
      return this.req;
    } catch (err) {
      return err;
    }
  }
}

class CustomWorld {
  constructor() {
    this.adapter = new ApiAdapter();
  }

  async createResource({ resource, payload }) {
    return this.adapter.postRequest({ resource, payload });
  }
}

setWorldConstructor(CustomWorld);
