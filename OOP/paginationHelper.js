// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  	this.collection = collection;
  	this.params = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  	return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  	return Math.ceil(this.collection.length/this.params);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  	var numOfpages = this.pageCount();
  	var book = [];
  	var count = this.params;

 	for(var i = 0; i<this.collection.length; i+=this.params){
  		book.push(this.collection.slice(i, count));
  		count += this.params;
  	}

  	if(pageIndex < numOfpages){
  		return book[pageIndex].length;
  	}else{
  		return -1;
  	}
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    	var numOfpages = this.pageCount();
  	var book = [];
  	var count = this.params;

 	for(var i = 0; i<this.collection.length; i+=this.params){
 		book.push(this.collection.slice(i, count));
 		count += this.params;
  	}

  	if(this.collection[itemIndex]){
  		for(var i=0; i<book.length; i++){
  			if(book[i].indexOf(this.collection[itemIndex]) !== -1){
  				return  i;
  			}
  		}
  	}else{
  		return -1;
  	}
	
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

console.log(helper.pageCount());//should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
