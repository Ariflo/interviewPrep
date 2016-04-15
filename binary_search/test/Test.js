var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , bs = require('../binary_search');

describe('binary search', function(){

    it("binarySearch of array ['a','b','c','d','e'], 'd' should return the index of 3", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], 'd')).to.equal(3);
    	expect(bs.binaryRecursive(['a','b','c','d','e'], 'd')).to.equal(3);
    	done();
    })         
    
    it("binarySearch of array ['a','b','c','d','e'], 'a' should return the index of 0", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], 'a')).to.equal(0);
    	expect(bs.binaryRecursive(['a','b','c','d','e'], 'a')).to.equal(0);
    	done();
    })         

    it("binarySearch of array ['a','b','c','d','e'], '9' should return the index of -1", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], '9')).to.equal(-1);
    	expect(bs.binaryRecursive(['a','b','c','d','e'], '9')).to.equal(-1);
    	done();
    })         

    it("binarySearch of array ['a','b','c','d','e'], 'b' should return the index of 1", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], 'b')).to.equal(1);
    	expect(bs.binaryRecursive(['a','b','c','d','e'], 'b')).to.equal(1);
    	done();
    })         

    it("binarySearch of array ['a','b','c','d','e'], '%$^&' should return the index of -1", function(done){
    	expect(bs.binarySearch(['a','b','c','d','e'], '&^%&&')).to.equal(-1);
    	expect(bs.binaryRecursive(['a','b','c','d','e'], '&^%&&')).to.equal(-1);
    	done();
    })       

})
