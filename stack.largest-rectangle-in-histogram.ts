interface Bar {
  index: number
  height: number
}

function largestRectangleArea(heights: number[]): number {
  let maxArea = 0
  // Store bars which can be extended to form a rectangular
  // in increasing heights
  let stack: Bar[] = []

  for (let i = 0; i < heights.length; i++) {
    let lastIndex

    while (stack.length > 0) {
      const lastBar = stack[stack.length - 1]

      if (heights[i] < lastBar.height) {
        // Calculate the rectangular area that can be formed from the last bar
        // to the current bar (not including the current bar)
        maxArea = Math.max(maxArea, (i - lastBar.index) * lastBar.height)
        // Track the last bar's position at which the current bar
        // should be considered to form a recetangular in the future
        lastIndex = lastBar.index
        stack.pop()
      } else {
        break
      }
    }

    stack.push({
      // If there is any bar being popped off, set the index of the current bar
      // to be the last bar being popped off. Otherwise, use the current index
      index: lastIndex ?? i,
      height: heights[i]
    })
  }

  while (stack.length > 0) {
    // If there is any bar remaining in the stack, we should calculate the
    // rectangular area that it can form from its index to the end
    const { index, height } = stack.pop()
    maxArea = Math.max(maxArea, (heights.length - index) * height)
  }

  return maxArea
};
