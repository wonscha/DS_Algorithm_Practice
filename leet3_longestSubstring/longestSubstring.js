// --- Origin
// LeetCode #3 (Medium)

// --- Directions
// Given a string s, find the length of the longest substring without repeating characters.

// --- Examples
// s = "abcabcbb" => 3
// s = "bbbbb" => 1
// s = "pwwkew" => 3

const longestSubstring = (s) => {
  // create variables to track maximum length and current substring
  let maxLength = 0;
  let subStr = '';

  for (let char of s) {
    if (!subStr.includes(char)) {
      // add current character to subStr if it's not yet included
      subStr += char;
    } else {
      // if a new character is already included in substring,
      // remove the same character just came across and the part before that from substring. 
      // Then add the new character.
      maxLength = Math.max(maxLength, subStr.length);
      subStr = subStr.substring(subStr.indexOf(char) + 1) + char;
    }
  }

  // return max length
  return Math.max(maxLength, subStr.length);
}

module.exports = longestSubstring;