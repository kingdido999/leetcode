// https://leetcode.com/problems/generate-parentheses/
function generateParenthesis(n: number): string[] {
  let stack = []
  let res = []

  const backtrack = (openCount: number, closeCount: number) => {
    if (openCount === n && closeCount === n) {
      // We've generated all parenthesis
      res.push(stack.join(''))
      return res
    }

    if (openCount < n) {
      // Push ( to the stack
      stack.push('(')
      backtrack(openCount + 1, closeCount)
      stack.pop()
    }

    if (closeCount < openCount) {
      // Push ) to the stack
      stack.push(')')
      backtrack(openCount, closeCount + 1)
      stack.pop()
    }
  }

  backtrack(0, 0)
  return res
};
