// https://www.studytonight.com/advanced-data-structures/heap
// https://www.studytonight.com/advanced-data-structures/implementing-heaps
// https://www.youtube.com/watch?v=t0Cq6tVNRBA
export default class MinHeap {
  private nums: number[];
  size: number;

  constructor() {
    this.nums = [];
    this.size = 0;
  }

  peek(): number {
    return this.nums[0];
  }

  add(n: number) {
    this.nums[this.size] = n;
    this.size++;
    this.bubbleUp();
  }

  remove() {
    if (this.size === 0) {
      return;
    }

    this.nums[0] = this.nums[this.size - 1];
    this.size--;
    this.bubbleDown();
  }

  private bubbleUp() {
    let idx = this.size - 1;

    while (idx > 0 && this.nums[idx] < this.nums[this.parentIdx(idx)]) {
      this.swap(idx, this.parentIdx(idx));
      idx = this.parentIdx(idx);
    }
  }

  private bubbleDown() {
    let idx = 0;

    while (idx < this.size && !this.isValidParent(idx)) {
      const childIdx = this.smallerChildIdx(idx);
      this.swap(idx, childIdx);
      idx = childIdx;
    }
  }

  private parentIdx(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private swap(a: number, b: number) {
    const temp = this.nums[a];
    this.nums[a] = this.nums[b];
    this.nums[b] = temp;
  }

  private isValidParent(index: number): boolean {
    if (!this.hasLeftChild(index)) {
      return true;
    }

    const leftChild = this.nums[this.leftChildIdx(index)];

    if (this.nums[index] >= leftChild) {
      return false;
    }

    if (!this.hasRightChild(index)) {
      return true;
    }

    const rightChild = this.nums[this.rightChildIdx(index)];
    return this.nums[index] < rightChild;
  }

  private leftChildIdx(index: number): number {
    return index * 2 + 1;
  }

  private rightChildIdx(index: number): number {
    return index * 2 + 2;
  }

  private smallerChildIdx(index: number): number {
    if (!this.hasLeftChild(index)) {
      return index;
    }

    if (!this.hasRightChild(index)) {
      return this.leftChildIdx(index);
    }

    const leftChild = this.nums[this.leftChildIdx(index)];
    const rightChild = this.nums[this.rightChildIdx(index)];

    if (leftChild < rightChild) {
      return this.leftChildIdx(index);
    } else {
      return this.rightChildIdx(index);
    }
  }

  private hasLeftChild(index: number): boolean {
    return this.leftChildIdx(index) <= this.size;
  }

  private hasRightChild(index: number): boolean {
    return this.rightChildIdx(index) <= this.size;
  }
}
