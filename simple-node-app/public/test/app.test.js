const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('responds with json message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from Node.js!' });
  });
});
