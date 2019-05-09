const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
    it('respond with yo yo yo JENKINS', function(done) {
        request(app)
            .get('/')
            .expect('yo yo yo JENKINS', done);
    });
});