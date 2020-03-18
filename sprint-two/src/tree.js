

var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods)
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child)
};

treeMethods.contains = function(target) {
  var result = false;
  for (var i = 0; i< this.children.length ; i++){
    if (this.children[i].value === target){
      return result = true;
    } else
      result = result || this.children[i].contains(target)
  }
  return result
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode =new Tree(value);
  this.children.push(newNode)
};

treeMethods.contains = function(target) {
 var result = false;
 var root = this.children
for (var i = 0; i<root.length ; i++){
    if (root[i].value === target){
      return true;
    }
    else
      result = result || root[i].contains(target)
}
return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
