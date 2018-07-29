const { setWorldConstructor } = require('cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../src');
const config = require('../../../src/config');

chai.use(chaiHttp);

class ApiAdapter {
  constructor() {
    this.url = process.env.targetURL || `http://localhost:${config.express.port}`;
  }

  async postRequest({ resource, payload }) {
    try {
      this.req = await chai.request(app)
        .post(`${this.url}/${resource}`)
        .set('Content-Type', 'application/json')
        .send(payload)
        .then(response => response);
      return this.req;
    } catch (err) {
      return err;
    }
  }

  async getRequest({ resource, queryParams }) {
    try {
      this.req = await chai.request(app)
        .get(`/${resource}`)
        .query(queryParams)
        .set('Content-Type', 'application/json')
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

  async getResource({ resource, queryParams = null }) {
    return this.adapter.getRequest({ resource, queryParams });
  }
}

setWorldConstructor(CustomWorld);
