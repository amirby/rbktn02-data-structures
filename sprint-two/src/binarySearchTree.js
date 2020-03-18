var BinarySearchTree = function(value) {
  var newTree = {};
  _.extend(newTree, binaryMethods);
  newTree.value = value;
  newTree.right = null;
  newTree.left = null
  return newTree;
};

var binaryMethods = {}

binaryMethods.insert = function(value){
var bin = BinarySearchTree(value);
  if (bin.value > this.value){
    if (this.right){
      return this.right.insert(value)
    }
    else
    return this.right= bin
  }
  else {
    if (this.left){
      return this.left.insert(value)
    }
    else
      return this.left= bin
    }
};

binaryMethods.contains = function (target){
  var result = false;
  if (this.left){
    if (this.left.value === target){
      return result = true
    }
    else result = result || this.left.contains(target)
  }
  if (this.right){
    if (this.right.value === target){
      return result = true
    }
    else result = result || this.right.contains(target)
  }
  return result;
};
binaryMethods.depthFirstLog = function (callback){
  callback(this.value)
  if (this.left){
    this.left.depthFirstLog(callback)
  }
  if (this.right){
    this.right.depthFirstLog(callback)
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
