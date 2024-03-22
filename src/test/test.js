(function() {
  'use strict';
  const chai = require('chai');
  const host = 'http://localhost:5000';
  let server = require('../../server');
  const request = require('superagent');
  chai.should();

  describe('User APIs', () => {
    describe("Test GET route /api/users/list", () => {
      it("It should return all users", (done) => {
        request.agent(server)
          .get(`${host}/api/users/list`)
          .end((err, response) => {
            response.status.should.be.eq(200);
            response.body.should.be.a('array');
            response.body.length.should.not.be.eq(0);
            done();
          });
      });
    })
  });
  describe('Plan APIs', () => {
    describe("Test GET route /api/plans/list", () => {
      it("It should return all plans", (done) => {
        request.agent(server)
          .get(`${host}/api/plans/list`)
          .end((err, response) => {
            response.status.should.be.eq(200);
            response.body.should.be.a('array');
            response.body.length.should.not.be.eq(0);
            done();
          });
      });
    })
  })
}());