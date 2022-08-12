// https://leetcode.com/problems/search-a-2d-matrix/
function searchMatrix(matrix: number[][], target: number): boolean {
  let t = 0
  let b = matrix.length - 1
  let row: number

  // Find the row which may contain the target
  while (t <= b) {
    row = Math.floor((t + b) / 2)

    if (matrix[row][matrix[row].length - 1] < target) {
      // The right most number is less than the target,
      // then it must be in the row below
      t = row + 1
    } else if (matrix[row][0] > target) {
      // The left most number is greater than the target,
      // then it must be in the row above
      b = row - 1
    } else {
      break
    }
  }

  if (t > b) {
    return false
  }

  let l = 0
  let r = matrix[0].length - 1

  // Find the target on the current row
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const curr = matrix[row][mid]

    if (curr === target) {
      return true
    } else if (curr > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return false
};
