// --- Origin
// LeetCode #5 (Medium)

// --- Directions
// Given a string s, return the longest palindromic substring in s.

// --- Examples
// s = "babad" => "bab"
// s = "cbbd" => "bb"


const longestPalindrome = (s) => {

  // function to find the longest palindrom expanding one by one
  const palindromeFromCenter = (str, left, right) => {
    if (str[left] !== str[right]) return str[left];

    while(left-1 >= 0 && right+1 < str.length && str[left-1] === str[right+1]) {
      left--, right++;
    }

    return str.slice(left, right+1);
  }

  // variable for stroing the longest palindrom substring
  let longest = ''

  for (let i = 0; i < s.length; i++) {

    // get the longest of both cases of even and odd palindromes
    const evenCase = palindromeFromCenter(s, i, i+1);
    const oddCase = palindromeFromCenter(s, i, i);

    // replace longest if the new palindrome is longer the the prvious one.
    if (evenCase.length > longest.length) {
      longest = evenCase;
    }

    if (oddCase.length > longest.length) {
      longest = oddCase;
    }
  }

  // return the longest
  return longest;
}

module.exports = longestPalindrome;