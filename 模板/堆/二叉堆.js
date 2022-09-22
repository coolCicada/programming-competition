class BinaryHeap {
  constructor() {
      this.heap = [null];
  }
  
  swap(i, j) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
  }
  
  isEmpty() {
      return this.heap.length === 1;
  }
  
  push(node) {
      this.heap.push(node);
      this.heapifyUp(this.heap.length - 1);
  }

  pop() {
      let ans = this.heap[1];
      this.swap(1, this.heap.length - 1);
      this.heap.pop();
      this.heapifyDown(1);
      return ans;
  }
  
  heapifyUp(p) {
      while (p > 1) {
          let fa = p >> 1;
          if (this.heap[p].key < this.heap[fa].key) {
              this.swap(p, fa);
              p = fa;
          }
          else break;
      }
  }

  heapifyDown(p) {
      let child = p * 2;
      while (child < this.heap.length) {
          const otherChild = p * 2 + 1;
          if (otherChild < this.heap.length && this.heap[child].key > this.heap[otherChild].key) {
              child = otherChild;
          }
          if (this.heap[child].key < this.heap[p].key) {
              this.swap(p, child);
              p = child;
              child = p * 2;
          }
          else break;
      }
  }
}