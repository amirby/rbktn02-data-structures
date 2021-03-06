

// Instantiate a new graph
var Graph = function() {
  this.storage ={}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.storage[node]){
    this.storage [node] = new Nodes(node)
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]){
    return true;
  }
  else return false

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage[node].edges){
    this.removeEdge(key, node)
  }
    delete this.storage[node]

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
 if (this.storage[fromNode].edges[toNode]){
   return true;
 }
 else return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode]
  delete this.storage[toNode].edges[fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage){
     cb(this.storage[key].value)
  }
};

var Nodes = function(value){
  this.value = value;
  this.edges= {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


