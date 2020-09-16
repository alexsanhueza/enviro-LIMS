const request = require('supertest');
const server = 'http://localhost:3000';

afterAll((done) => done());

describe('Route integration', () => {
  describe('Methods route', () => {
    it('Responds with 200 status and correct content-type', (done) => {
      request(server)
        .get('/methods')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });

    it('Returns an array of method objects', (done) => {
      request(server)
        .get('/methods')
        .end((err, resp) => {
          expect(resp.body).toBeInstanceOf(Array);
          expect(resp.body[0]).toHaveProperty('epa_method');
          if (err) return done(err);
          return done();
        });
    });
  });
  describe('Reagents route', () => {
    it('Responds with 200 status and correct content-type', (done) => {
      request(server)
        .get('/reagents')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });

    it('Returns an array of reagent objects', (done) => {
      request(server)
        .get('/reagents')
        .end((err, resp) => {
          expect(resp.body).toBeInstanceOf(Array);
          expect(resp.body[0]).toHaveProperty('cas_number');
          if (err) return done(err);
          return done();
        });
    });
  });
});
