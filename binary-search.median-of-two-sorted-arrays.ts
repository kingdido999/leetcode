// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const isOdd = (nums1.length + nums2.length) % 2 === 1
  let short: number[]
  let long: number[]

  if (nums1.length > nums2.length) {
    long = nums1
    short = nums2
  } else {
    long = nums2
    short = nums1
  }

  let l = 0
  let r = short.length - 1

  while (true) {
    // Partition the short array in half
    const shortLeftIdx = Math.floor((l + r) / 2)
    // Partition the long array where the left part length is
    // half of the total array - half of the short array
    const longLeftIdx = Math.floor((short.length + long.length) / 2) - shortLeftIdx - 2
    // The end of the left partition of the short array
    const shortLeft = short[shortLeftIdx] ?? Number.MIN_SAFE_INTEGER
    // The start of the right partition of the short array
    const shortRight = short[shortLeftIdx+1] ?? Number.MAX_SAFE_INTEGER
    // The end of the left partition of the long array
    const longLeft = long[longLeftIdx] ?? Number.MIN_SAFE_INTEGER
    // The start of the right partition of the long array
    const longRight = long[longLeftIdx + 1] ?? Number.MAX_SAFE_INTEGER

    if (shortLeft <= longRight && longLeft <= shortRight) {
      // We have found the correct partition
      if (isOdd) {
        // Return the middle number, whichever is the greater from the start of
        // the two right partitions
        return Math.min(shortRight, longRight)
      } else {
        // Median left: the greater value of the end of the two left partitions
        // Median right: the smaller value of the start of the two right partitions
        return (Math.max(shortLeft, longLeft) + Math.min(shortRight, longRight)) / 2
      }
    } else if (shortLeft > longRight) {
      // The end of the left partition of the short array is greater than the
      // start of the right partition of the long array. It means we need to
      // search the new median in the left part of the short array.
      r = shortLeftIdx - 1
    } else {
      // Otherwise, we need to search in the right part fo the short array.
      l = shortLeftIdx + 1
    }
  }
};
