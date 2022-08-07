// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return ""
  }

  // Store the frequency of each char in t
  let freqTarget = new Map()

  for (let i = 0; i < t.length; i++) {
    freqTarget.set(t[i], (freqTarget.get(t[i]) || 0) + 1)
  }

  // Store the frequncy of each char in the current window
  let freqCurr = new Map()

  // The number of unique chars to form a minimum substring
  let required = freqTarget.size

  // The number of unique chars formed so far
  let formed = 0

  // Window left
  let l = 0

  // Window right
  let r = 0

  let ans = {
    len: -1,
    left: 0,
    right: 0
  }

  while (r < s.length) {
    // Extend the window to the right
    freqCurr.set(s[r], (freqCurr.get(s[r]) || 0) + 1)

    if (freqCurr.get(s[r]) === freqTarget.get(s[r])) {
      // Increment formed if the current count satisfy the target count
      formed++
    }

    // Shrink the window from the left if the current window is a substring
    while (l <= r && formed === required) {
      if (ans.len === - 1 || r - l + 1 < ans.len) {
        // If we have not recorded the substring length or there is a
        // shorter substring, update the answer
        ans.len = r - l + 1
        ans.left = l
        ans.right = r
      }

      // Shrink the window from the left
      freqCurr.set(s[l], freqCurr.get(s[l]) - 1)

      if (freqCurr.get(s[l]) < freqTarget.get(s[l])) {
        // Decrement formed if the current count is below the target count
        formed--
      }

      l++
    }

    r++
  }

  if (ans.len === -1) {
    return ""
  } else {
    return s.substring(ans.left, ans.right + 1)
  }
};
