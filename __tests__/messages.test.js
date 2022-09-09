const app = require('../src/app')
const request = require('supertest')

const route = '/api/v1/messages'

describe('POST /api/v1/messages', () => {
  describe('Given a message key', () => {
    test('Should respond with 201 status code', async () => {
      const response = await request(app).post(route).send({
        message: 'TEST message',
      })
      expect(response.statusCode).toBe(201)
    })
  })
  describe('When message key is missing', () => {
    test('Should respond with 401 status code', async () => {
      const response = await request(app).post(route).send({})
      expect(response.statusCode).toBe(401)
    })
  })
})
