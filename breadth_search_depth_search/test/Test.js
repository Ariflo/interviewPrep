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
