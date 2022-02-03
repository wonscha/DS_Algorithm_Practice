// --- Origin
// LeetCode #14 (Easy)

// --- Directions
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// --- Examples
// strs = ["flower","flow","flight"] => "fl"
// strs = ["dog","racecar","car"] => ""

// --- Constraints
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

const longestCommonPrefix = (strs) => {
  let longest = ''; // longest common prefix
  const firstStr = strs[0]; // first element of the input array

  for (let i = 0; i < firstStr.length; i++) {
    // add ith character if every element has the same character on ith place
    // if not, break from the loop
    if (strs.every(str => str[i] === firstStr[i])) {
      longest += firstStr[i]
    } else {
      break;
    }
  }

  // return the longest common prefix
  return longest;
}

module.exports = longestCommonPrefix;