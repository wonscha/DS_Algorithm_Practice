// --- Origin
// LeetCode #28 (Easy)

// --- Directions
// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. 
// This is consistent to C's strstr() and Java's indexOf().

// --- Examples
// haystack = "hello", needle = "ll" => 2
// haystack = "aaaaa", needle = "bba" => -1
// haystack = "", needle = "" => 0

// --- Constraints
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0; // return 0 when needle is an empty

  for(let i = 0; i < haystack.length - needle.length + 1; i++) {
    // slice as long as the length of the needle and compare
    if (haystack.slice(i, i + needle.length) === needle) {

      // return i if it matches
      return i
    }
  }

  // return -1 if there was no matches
  return -1
};

module.exports = strStr;