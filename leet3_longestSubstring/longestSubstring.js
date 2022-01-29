// --- Origin
// LeetCode #3 (Medium)

// --- Directions
// Given a string s, find the length of the longest substring without repeating characters.

// --- Examples
// s = "abcabcbb" => 3
// s = "bbbbb" => 1
// s = "pwwkew" => 3

const longestSubstring = (s) => {
  let maxLength = 0;
  let subStr = '';

  for (let char of s) {
    if (!subStr.includes(char)) {
      subStr += char;
    } else {
      maxLength = Math.max(maxLength, subStr.length);
      subStr = subStr.substring(subStr.indexOf(char) + 1) + char;
    }
  }

  return maxLength >= subStr.length ? maxLength : subStr.length;
}

module.exports = longestSubstring;