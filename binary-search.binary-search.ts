// https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      // If the middle number is greater than target, then retract the
      // right boundary to the middle index - 1
      hi = mid - 1;
    } else {
      // If the middle number is smaller than target, then extend the
      // left boundary to the middle index + 1
      lo = mid + 1;
    }
  }

  return -1;
}
