const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
    it('respond with hi world', function(done) {
        request(app)
            .get('/')
            .expect('hi world', done);
    });
});