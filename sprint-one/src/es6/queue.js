class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value){
    this[ this.rear ] = value;
    this.rear++;
  }

  dequeue (){
    var val = this[ this.front ];
    delete this[ this.front] ;
    if (this.rear > this.front){
      this.front++
    }
    return val
  }

  size() {
    return this.rear - this.front;
  };

}
