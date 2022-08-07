 // https://leetcode.com/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    // s2 must not be a permutation of s1 if s2 is longer than s1
    return false;
  }

  // Set up arrays to count the occurences of characters in s1 and s2
  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  // Initialize the window to the length of s1
  // s1: ab
  // s2: eidbaooo
  //     []
  for (let i = 0; i < s1.length; i++) {
    s1Count[charToIndex(s1[i])]++;
    s2Count[charToIndex(s2[i])]++;
  }

  // Slide the window
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (matches(s1Count, s2Count)) {
      // If the counts match, it means the s2 string in the sliding window
      // is a permutation of s1

      // s1: ab
      // s2: eidbaooo
      //        []
      return true;
    }

    // Move the window to the right
    // Increase count to move the right boundary
    s2Count[charToIndex(s2[i + s1.length])]++;
    // Decrease count to move the left boundary
    s2Count[charToIndex(s2[i])]--;
  }

  return matches(s1Count, s2Count);
}

function charToIndex(char: string): number {
  // 'a'.charCodeAt() === 97
  return char.charCodeAt(0) - 97;
}

function matches(s1Count: number[], s2Count: number[]) {
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] !== s2Count[i]) {
      return false;
    }
  }

  return true;
}
