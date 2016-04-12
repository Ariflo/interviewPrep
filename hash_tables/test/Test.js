var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , hashTables = require ('../hashTable');

describe('hash tables', function(){

    it("isUnique should return true if a string has all unique characters", function(done){
    	expect(hashTables.isUnique("a")).to.equal(true);
    	done();
    })

})