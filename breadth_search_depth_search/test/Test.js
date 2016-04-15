var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , bvds = require('../breadth_v_depth_search');

describe('binary search', function(){

    it("breadthSearch of this node for this value should return true", function(done){
        expect(bvds.breadthSearch()).to.equal(true);
        done();
    })         

})

describe('fibonacci', function(){

    it("fibonacci should return 8 with an input of 6", function(done){
        expect(bvds.fibonacci(6)).to.equal(8);
            expect(bvds.fibonacci(3)).to.equal(2);
        done();
    })         

})

describe('factorial', function(){

    it("factorial should return 120 with an input of 5", function(done){
    	expect(bvds.factorial(5)).to.equal(120);
    	done();
    })         

})
