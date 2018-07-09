let server = require('../server');
let chai = require('chai'),
  fs = require('fs'),
  expect = chai.expect;

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));


describe('/GET /', () => {
  it('index page', done => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
});

describe('/POST /api/fileanalyse', () => {
  let resSuccessSchema = {
    type: 'object',
    required: ['size', 'name'],
    properties: {
      size: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
    }
  };
  let resErrSchema = {
    type: 'object',
    required: ['error'],
    properties: {
      error: {
        type: 'string'
      },
    }
  };
  it('should return error without file attached', done => {
    chai.request(server)
      .post('/api/fileanalyse')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.jsonSchema(resErrSchema);
        done();
      });
  });
  it('should return uploaded file stats', done => {
    chai.request(server)
      .post('/api/fileanalyse')
      .attach('upfile', fs.readFileSync(__dirname + '/../public/images/github.svg'), 'github.svg')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.jsonSchema(resSuccessSchema);
        expect(res.body.size).to.equal(1048);
        expect(res.body.name).to.equal('github.svg');
        done();
      });
  });

});
