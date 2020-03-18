

// Instantiate a new graph
var Graph = function() {
  this.storage ={}
  this.index = 0
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[this.index] = Nodes(node)
  this.index++
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false
  for (var key in this.storage){
    if (this.storage[key].value === node){
      return result = true
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage){
    if (this.storage[key].value === node){
      for (var i = 0 ; i < this.storage[key].edges ; i++){
        this.removeEdge(this.storage[key].edges[i], node)
      }
      delete this.storage[key]
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false
  for (var key in this.storage){
    if ( this.storage[key].value === fromNode){
      if (this.storage[key].edges.includes(toNode)){
        return result = true
      }
    }
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this.storage){
    if ( this.storage[key].value === fromNode){
      this.storage[key].edges.push(toNode)
    }
  }
  for (var key in this.storage){
    if ( this.storage[key].value === toNode){
      this.storage[key].edges.push(fromNode)
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.storage){
    if ( this.storage[key].value === fromNode){
      var remov1 = this.storage[key].edges.indexOf(toNode)
      this.storage[key].edges.splice(remov1,1)
    }
  }
  for (var key in this.storage){
    if ( this.storage[key].value === toNode){
      var remov2 = this.storage[key].edges.indexOf(fromNode)
      this.storage[key].edges.splice(remov2, 1)
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage){
     cb(this.storage[key].value)
  }
};

var Nodes = function(value){
  var node = {}
  node.value = value;
  node.edges= [];
  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


