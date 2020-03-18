var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(this._storage.hasOwnProperty(item))){
    this._storage[item] = true
  }
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item)
};

setPrototype.remove = function(item) {
  var val = this._storage[item];
  delete this._storage[item];
  return val;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
