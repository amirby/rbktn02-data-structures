class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
  }

  push(value) {
    this[ this.top ] = value;
    this.top++
  };

  pop() {
    var val = this[this.top-1]
    delete this[this.top-1]
    if (this.top > 0){
      this.top--
    }
    return val
  };

  size() {
    return this.top
  };

}