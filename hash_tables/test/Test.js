var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , hashTables = require ('../hashTable');

describe('hash tables', function(){

    it("isUnique should return false if a string of letters do not have all unique characters", function(done){
    	expect(hashTables.isUnique("aaa")).to.equal(false);
    	expect(hashTables.isUnique("christian")).to.equal(false);
    	expect(hashTables.isUnique("bbba")).to.equal(false);
    	done();
    })       

     it("isUnique should return false if a string of letters and characters do not have all unique characters", function(done){
    	expect(hashTables.isUnique("^&&*^Apple")).to.equal(false);
    	done();
    })    

    it("isUnique should return true if a string has all unique characters", function(done){
    	expect(hashTables.isUnique("Joel")).to.equal(true);
    	expect(hashTables.isUnique("David")).to.equal(true);
    	expect(hashTables.isUnique("436*^%$")).to.equal(true);
    	expect(hashTables.isUnique("()7&tom")).to.equal(true);
    	done();
    })    

})