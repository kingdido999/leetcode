import MinHeap from "./domain/min-heap";

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  for (let n of nums) {
    minHeap.add(n);

    if (minHeap.size > k) {
      minHeap.remove();
    }
  }

  return minHeap.peek();
}
