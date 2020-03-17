var Queue = function() {
  var someInstance = {};
  var rear = 0;
  var front = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[ rear ]= value;
    rear++;
  };

  someInstance.dequeue = function() {
    var val = storage[ front ];
    delete storage[ front ];
    if (rear > front){
      front ++;
    }
      return val;

  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};
