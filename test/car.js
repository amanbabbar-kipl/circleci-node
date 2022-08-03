//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Cars', () => {
  describe('/GET car', () => {
      it('it should GET all the cars', (done) => {
        chai.request(server)
            .get('/car')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('json');
                  res.body.length.should.be.eql(2);
              done();
            });
      });
  });
});