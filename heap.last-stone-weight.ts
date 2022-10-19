import MaxHeap from "./domain/max-heap";

function lastStoneWeight(stones: number[]): number {
  const heap = new MaxHeap();

  for (const stone of stones) {
    heap.add(stone);
  }

  while (heap.size > 1) {
    const x = heap.peek();
    heap.remove();
    const y = heap.peek();
    heap.remove();

    if (x > y) {
      heap.add(x - y);
    }
  }

  if (heap.size === 0) {
    return 0;
  } else {
    return heap.peek();
  }
}
