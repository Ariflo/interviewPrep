var request = require('supertest')
    , expect = require('chai').expect
    , session = require('supertest-session')
    , hashTables = require ('../linkedLists');

describe('Linked_Lists', function(){

    it("removeDups should return a linkedList with duplicates removed", function(done){
    	expect(hashTables.removeDups({value: 5, next: {value: 3, next:{value: 4, next:{value: 4, next:{ value: 1, next: null}}}}})).to.equal({value: 5, next: {value: 3, next:{value: 4, next:{ value: 1, next: null}}}});
    	done();
    })       

})
