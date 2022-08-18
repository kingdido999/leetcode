// https://leetcode.com/problems/find-the-duplicate-number/
function findDuplicate(nums: number[]): number {
  // Use Floyd's cycle finding algorithm
  let slow = 0
  let fast = 0

  // First, find the intersection of two pointers
  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    if (slow === fast) {
      break
    }
  }

  slow = 0

  // Then, move two pointers at the same speed until they reach the same value
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  // The value will be the start of the cycle, i.e., the duplicate
  return slow
};
