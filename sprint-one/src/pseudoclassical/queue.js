var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.rear = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(value){
  this[ this.rear ] = value;
  this.rear++;
}

Queue.prototype.dequeue = function(){
  var val = this[ this.front ];
  delete this[ this.front] ;
  if (this.rear > this.front){
    this.front++
  }
  return val
}

Queue.prototype.size = function() {
  return this.rear - this.front;
};
