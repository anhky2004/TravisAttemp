/**
 * Created by hoangdv on 0029, Jun, 29, 2017.
 */
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('trees', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET trees', () => {
        it('it should GET all the trees', (done) => {
            chai.request(server)
                .get('/trees')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(9); // fixme :)
                    done();
                });
        });
    });

    /*
     * Test the /POST route
     */
    /*describe('/POST trees', () => {
        it('it should POST a tree', (done) => {
            let tree = {
                name: "Bug",
                status: "detected"
            };
            chai.request(server)
                .post('/trees')
                .send(tree)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('tree successfully added!');
                    res.body.tree.should.have.property('id');
                    res.body.tree.should.have.property('name').eql(tree.name);
                    res.body.tree.should.have.property('status').eql(tree.status);
                    done();
                });
        });
        it('it should not POST a book without status field', (done) => {
            let tree = {
                name: "Bug"
            };
            chai.request(server)
                .post('/trees')
                .send(tree)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql("tree is invalid!");
                    done();
                });
        });
    });*/

    /*
     * Test the /GET/:id route
     */
   /* describe('/GET/:id trees', () => {
        it('it should GET a tree by the given id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .get('/trees/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('tree');
                    res.body.tree.should.have.property('id').eql(id);
                    res.body.tree.should.have.property('name');
                    res.body.tree.should.have.property('status');
                    done();
                });
        });
    });*/

    /*
     * Test the /PUT/:id route
     */
    /*describe('/PUT/:id trees', () => {
        it('it should UPDATE a tree given the id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .put('/trees/' + id)
                .send({
                    name: "Bug",
                    status: "fixed"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('tree');
                    res.body.tree.should.have.property('name').eql("Bug");
                    res.body.tree.should.have.property('status').eql("fixed");
                    done();
                });
        });
    });*/

    /*
     * Test the /DELETE/:id route
     */
    /*describe('/DELETE/:id trees', () => {
        it('it should DELETE a tree given the id', (done) => {
            // TODO add a model to db then get that id to take this test
            let id = 1;
            chai.request(server)
                .delete('/trees/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('tree successfully deleted!');
                    res.body.should.have.property('result');
                    res.body.result.should.have.property('roweffected').eql(1);
                    done();
                });
        });
    });*/

});
