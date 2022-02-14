// --- Origin
// LeetCode #17 (Medium)

// --- Directions
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
// Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// 1: '', 2: 'abc', 3:'def',
// 4: 'ghi', 5: 'jkl', 6: 'mno',
// 7: 'pqrs', 8: 'tuv', 9: wxyz 

// --- Examples
// digits = "23" => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// digits = "" => []
// digits = "2" => ["a","b","c"]

map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

const letterCombination = (digits) => {
  const results = []; // results array to return
  if (digits.length === 0) return results; // return empty if input is empty

  // define a recursive function.
  // idx => index iterating digits
  // string => series of chars concatenated
  const dfs = (idx, string) => {

    // base case (when idx exceeds the number of digits length)
    // push completed string to results array
    if (idx === digits.length) {
      return results.push(string); 
    }

    // invoke recursive function multiple times with each possible chars
    for (const char of map[digits[idx]]) {
      dfs(idx + 1, string + char);
    }
  }

  // invoke recursive function & return results
  dfs(0, '');
  return results;
};

module.exports = letterCombination;