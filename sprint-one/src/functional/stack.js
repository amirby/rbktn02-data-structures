var Stack = function() {
  var someInstance = {};
  var top = 0
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[ top ] = value;
    top++
  };

  someInstance.pop = function() {
    var val = storage[top-1]
    delete storage[top-1]
    if (top > 0){
      top--
    }
    return val
  };

  someInstance.size = function() {
    return top
  };

  return someInstance;
};
