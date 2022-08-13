// https://leetcode.com/problems/search-in-rotated-sorted-array/
function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (target === nums[m]) {
      return m
    } else if (nums[l] <= nums[m]) {
      // The left part is ascending
      if (target >= nums[l] && target <= nums[m]) {
        // If the target is in the left part, then search the left part
        r = m - 1
      } else {
        // Otherwise, search the right part
        l = m + 1
      }
    } else {
      // The right part is ascending
      if (target >= nums[m] && target <= nums[r]) {
        // If the target is in the right part, then search the right part
        l = m + 1
      } else {
        // Otherwise, search the left part
        r = m - 1
      }
    }
  }

  return - 1
};
