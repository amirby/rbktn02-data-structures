var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.rear = 0;
  storage.front = 0;
  _.extend(storage, queueMethods)
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[ this.rear ]= value;
  this.rear++;
};

queueMethods.dequeue = function() {
  var val = this[ this.front ];
  delete this[ this.front ];
  if (this.rear > this.front){
    this.front ++;
  }
  return val;
};

queueMethods.size = function() {
  return this.rear - this.front;
};
