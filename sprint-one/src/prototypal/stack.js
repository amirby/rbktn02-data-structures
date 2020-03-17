var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods)
  storage.top = 0;
return storage;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this[ this.top ] = value;
  this.top++
};

stackMethods.pop = function() {
  var val = this[this.top-1]
  delete this[this.top-1]
  if (this.top > 0){
    this.top--
  }
  return val
};

stackMethods.size = function() {
  return this.top
};
