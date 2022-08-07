// https://leetcode.com/problems/sliding-window-maximum/
function maxSlidingWindow(nums: number[], k: number): number[] {
  const res = [];
  // Keep the current max index in descending order
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove the tail index until the current value is not greater than
    // the tail index value
    while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }

    q.push(i);

    // Check the current max index is in the sliding window range
    if (q[0] <= i - k) {
      q.shift();
    }

    // Push the current max into the result once the sliding window is formed
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }

  return res;
};
