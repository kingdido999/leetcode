// https://leetcode.com/problems/daily-temperatures/
interface StackItem {
  temp: number
  index: number
}

function dailyTemperatures(temperatures: number[]): number[] {
  let res = []
  // Temperatures in decreasing order
  let stack: StackItem[] = []
  const t = temperatures

  for (let i = 0; i < t.length; i++) {
    while (stack.length > 0) {
      const lastTemp = stack[stack.length - 1].temp

      if (t[i] > lastTemp) {
        // If the current temp is higher than the top temp on the stack,
        // pop the stack and record the distance in the result
        const { index } = stack.pop()
        res[index] = i - index
      } else {
        break
      }
    }

    stack.push({ temp: t[i], index: i })
  }

  // For any temp left in the stack, they do not have higher temp in the future,
  // so fill with 0s
  while (stack.length > 0) {
    const { index } = stack.pop()
    res[index] = 0
  }

  return res
};
