import MinHeap from "./domain/min-heap";

class KthLargest {
  private minHeap: MinHeap;
  private k: number;

  constructor(k: number, nums: number[]) {
    this.minHeap = new MinHeap();
    this.k = k;

    for (let n of nums) {
      this.minHeap.add(n);
    }

    // Remove the min items until k items left,
    // so the 1st item will be the kth largest
    while (this.minHeap.size > k) {
      this.minHeap.remove();
    }
  }

  add(val: number): number {
    this.minHeap.add(val);

    if (this.minHeap.size > this.k) {
      this.minHeap.remove();
    }

    return this.minHeap.peek();
  }
}
