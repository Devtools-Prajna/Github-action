const request = require('supertest');
const app = require('../index');

describe('Simple ToDo API', () => {
  it('creates a task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test task' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('Test task');
  });

  it('lists tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('updates a task', async () => {
    const createRes = await request(app).post('/tasks').send({ title: 'Update task' });
    const id = createRes.body.id;
    const updateRes = await request(app).put(`/tasks/${id}`).send({ completed: true });
    expect(updateRes.body.completed).toBe(true);
  });

  it('deletes a task', async () => {
    const createRes = await request(app).post('/tasks').send({ title: 'Delete task' });
    const id = createRes.body.id;
    const deleteRes = await request(app).delete(`/tasks/${id}`);
    expect(deleteRes.statusCode).toBe(204);
  });
});
