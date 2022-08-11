// https://leetcode.com/problems/evaluate-reverse-polish-notation/
function evalRPN(tokens: string[]): number {
  // To store the unevaluated numbers in the coming order
  let stack = []

  for (let t of tokens) {
    if (isOperator(t)) {
      // Calculate the result by evaluating the top two numbers
      // in the stack using the current operator
      const right = stack.pop()
      const left = stack.pop()
      const res = calculate(left, right, t)

      // Push the evaluated result to the stack
      stack.push(res)
    } else {
      stack.push(parseInt(t))
    }
  }

  return stack.pop()
};

function isOperator(str: string): boolean {
  return ['+', '-', '*', '/'].includes(str)
}

function calculate(left: number, right: number, operator: string): number {
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return Math.trunc(left / right)
  }
}
