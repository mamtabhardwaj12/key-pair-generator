/** 
 * @author:Akshay Misal
 * @version:1.0.0
 * @since:10-Aug-2018
*/
var server = require('./../server')
var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/**
 * @author Akshay Misal
 * @link: POST /create
 * @description Create the keypair using stellar
 * @param {} req 
 * @param {keypair} res 
 */
describe('Create keypair', () => {
    it('it should get the KeyPair', (done) => {
  
      chai.request(server)
          .post('/create')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.json;
            done();
          });
    });
  });