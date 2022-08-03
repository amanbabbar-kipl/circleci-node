//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();


chai.use(chaiHttp);


describe('Init', function () {
 
  it('check app status', function (done) {
    chai.request(server).get('/').end((err, res) => {
      should.not.exist(err);
      res.should.have.status(200);
      done();
    })
  });
 
});

//describe('Cars', () => {
  describe('/GET car', () => {
    it('it should GET all the cars', (done) => {
        chai.request(server)
          .get('/car')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('car');
                //res.body.length.should.be.eql(2);
                done();
          });
    });
  });
//});