var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , hashTables = require ('../linkedLists');

describe('Linked_Lists', function(){

    it("isUnique should return false if a string of letters do not have all unique characters", function(done){
    	expect(hashTables.isUnique("aaa")).to.equal(false);
    	done();
    })       

})
