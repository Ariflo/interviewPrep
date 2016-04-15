var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , bs = require ('../binary_search');

describe('binary search', function(){

    it("binarySearch should return the index of the search value", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], 'd').to.equal(3);
    	done();
    })       

})
