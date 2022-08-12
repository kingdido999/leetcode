// https://leetcode.com/problems/koko-eating-bananas/
function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1
  let hi = 1

  // The upper bound of k is the largest pile number
  for (let i = 0; i < piles.length; i++) {
    hi = Math.max(hi, piles[i])
  }

  let k: number

  while (lo < hi) {
    k = Math.floor((lo + hi) / 2)
    let hrs = 0

    for (let p of piles) {
      hrs += Math.ceil(p / k)
    }

    if (hrs <= h) {
      // Can finish within h hours => k could be the minimum speed
      // but we're not sure, so set the maximum speed to k
      hi = k
    } else {
      // Cannot finish within h hours => we must increase the speed
      lo = k + 1
    }
  }

  // Once lower and upper bound collides, we have found the minimum speed
  return hi
};
