// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      // If the left most is less or equal to the right most,
      // then the left most must be the minimum number
      return nums[l]
    }

    const m = Math.floor((l + r) / 2)

    if (nums[l] <= nums[m]) {
      // If the left part is ascending, then the right part
      // must contain the minimum number
      l = m + 1
    } else {
      // Otherwise, the left part (including the mid number)
      // must container the minimum number
      r = m
    }
  }
};
