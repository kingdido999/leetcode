// https://leetcode.com/problems/generate-parentheses/
function generateParenthesis(n: number): string[] {
  let res = new Set<string>()
  res.add('()')
  let count = 1

  while (count < n) {
    let s = new Set<string>()

    // For each existing combination, generate a set of new combinations by
    // inserting '()' to the string at each index
    for (let comb of res) {
      for (let j = 0; j < comb.length; j++) {
        const next = comb.substring(0, j) + '()' + comb.substring(j)
        s.add(next)
      }
    }

    // Update the result to the new set
    res = s
    count++
  }

  return [...res]
};
