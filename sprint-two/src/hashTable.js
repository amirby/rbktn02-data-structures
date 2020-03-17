
/*
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  if(bucket === undefined) {
    this._storage.set(index,[[k,v]]);
  }
  else {

    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
      }
      else {
        bucket.push([k,v])
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  if(bucket.length === 1) {
    return bucket[0][1]
  }
  else {
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  if(bucket.length === 1) {
   return bucket.pop();
  }
  else {
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket.splice(i,1)
      }
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


var HashTable = function() {
  this._limit = 8;
  this._storage = new Array(this._limit);
  for (var i = 0; i< this._storage.length ; i++){
    this._storage[i] = new Map()
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index].set(k,v)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index].get(k)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removed = this.retrieve(k)
  this._storage[index].delete(k)
  return removed;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


Map()
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index].set(k,v)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index].get(k)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removed = this.retrieve(k)
  this._storage[index].delete(k)
  return removed;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



