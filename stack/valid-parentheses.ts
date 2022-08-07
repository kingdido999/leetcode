// https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    // Odd number of brackets must not be valid
    return false;
  }

  // To store the open brackets
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (isOpenBracket(bracket)) {
      // Push open bracket
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();

      if (!isBracketPair(lastBracket, bracket)) {
        // Not valid if the last open bracket cannot be closed by the current bracket
        return false;
      }
    }
  }

  // If all brackets match, then there must not be open brackets left
  return stack.length === 0;
}

function isOpenBracket(bracket: string) {
  return ["(", "{", "["].includes(bracket);
}

const bracketMap = {
  "(": ")",
  "{": "}",
  "[": "]"
};

function isBracketPair(open: string, close: string) {
  return bracketMap[open] === close;
}
