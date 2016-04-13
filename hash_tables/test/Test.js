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

    it("isSubstring should return true if a s2 is a rotation of s1", function(done){
    	expect(hashTables.isRotated("waterbottle", "erbottlewat")).to.equal(true);
    	expect(hashTables.isRotated("bananas", "asbanan")).to.equal(true);
    	expect(hashTables.isRotated("cookies", "iescook")).to.equal(true);
    	expect(hashTables.isRotated("blanket", "nketBla")).to.equal(true);
    	expect(hashTables.isRotated("Magneto", "netomag")).to.equal(true);
    	expect(hashTables.isRotated("%$$%^^", "%^^%$$")).to.equal(true);
    	done();
    })        

    it("isSubstring should return false if a s2 is NOT a rotation of s1", function(done){
    	expect(hashTables.isRotated("Joel", "pizza")).to.equal(false);
    	expect(hashTables.isRotated("ellie", "elmo")).to.equal(false);
    	expect(hashTables.isRotated("arizona", "anton")).to.equal(false);
    	expect(hashTables.isRotated("^&&^", "^%^**")).to.equal(false);
    	done();
    })    

})
