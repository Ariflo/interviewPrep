function Node(val, next) {
  this.val = val;

  if (!!next) {
    this.next = next;
  } else {
    this.next = null;
  }
}

function SinglyLinkedList() {

  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {
  if (index >= this.length || index < 0) return undefined;

  var i = 0;
  var curNode = this.head;
  for ( ; curNode !== null && i < index; i++) {
    curNode = curNode.next;
  }

  if (!curNode) return undefined;
  return curNode;
};

SinglyLinkedList.prototype.push = function(val) {

  var newNode = new Node(val);
  
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;

  return this;
};

SinglyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;
  if (this.length === 1) {
    var value = this.head.val;
    this.clear();
    return value;
  }

  // O(n) operation to do a pop
  var curNode = this.__getNodeAt(this.length - 2);

  var value = this.tail.val;
  this.tail = curNode;
  curNode.next = null;
  this.length--;
  return value;
};

SinglyLinkedList.prototype.unshift = function(val) {
  if (!this.head) {
    return this.push(val);
  }

  var newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;
  this.length++;

  return this;
};

SinglyLinkedList.prototype.shift = function() {
  if (this.length <= 1) return this.pop();

  var value = this.head.val
  this.head = this.head.next;
  this.length--;
  return value;
};

SinglyLinkedList.prototype.get = function(index) {
  var node = this.__getNodeAt(index);
  if (!node) return undefined;
  return node.val;
};

SinglyLinkedList.prototype.set = function(index, val) {
  var node = this.__getNodeAt(index);
  if (!node) return undefined;
  node.val = val;
  return val;
};

SinglyLinkedList.prototype.remove = function(index) {
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  
  var prevNode = this.__getNodeAt(index - 1);
  if (prevNode) {
    var val = prevNode.next.val;
    prevNode.next = prevNode.next.next;
    this.length--;
    return val;
  }
};

module.exports = SinglyLinkedList;