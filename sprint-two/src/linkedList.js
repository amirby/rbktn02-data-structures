var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value)
    if (!list.head){
      list.head = newNode;
      list.tail = newNode;
    }else {
     this.tail.next = newNode;
     this.tail= newNode;
    }
  };

  list.removeHead = function() {
    if (list.head){
      var remove = this.head.value;
      this.head = this.head.next;
      return remove;
    }
  };

  list.contains = function(target) {
    var current = this.head;
    var result = false;
    while (current){
      if (current.value === target){
        return result = true
      }else current = current.next;
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
