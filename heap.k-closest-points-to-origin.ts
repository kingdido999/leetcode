import MinHeap from "./domain/min-heap";

function kClosest(points: number[][], k: number): number[][] {
  let minHeap = new MinHeap();
  let distToPoints = {};

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const dist = distanceToOrigin(x, y);
    minHeap.add(dist);

    if (distToPoints[dist] === undefined) {
      distToPoints[dist] = [];
    }

    distToPoints[dist].push([x, y]);
  }

  let count = k;
  let res = [];

  while (count > 0) {
    const dist = minHeap.peek();
    minHeap.remove();
    const points = distToPoints[dist];

    while (points.length > 0) {
      const p = points.pop();
      res.push(p);
      count--;

      if (count === 0) {
        break;
      }
    }
  }

  return res;
}

function distanceToOrigin(x: number, y: number) {
  return Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2);
}
