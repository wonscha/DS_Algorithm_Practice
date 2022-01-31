// --- Origin
// LeetCode #13 (Easy)

// --- Directions
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together.  
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.   
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
// - I can be placed before V (5) and X (10) to make 4 and 9. 
// - X can be placed before L (50) and C (100) to make 40 and 90. 
// - C can be placed before D (500) and M (1000) to make 400 and 900.

// --- Examples
// s = "III" => 3
// s = "LVIII" => 58
// s = "MCMXCIV" => 1994

const romanToInt = (s) => {

  // map object mapping roman to integer
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  // result variable where sum is added up
  let result = 0;

  // iterate over the input string
  // if next number is larger than current number, subtract corresponding number from result
  // if not, add the corresponding number to result
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i+1]]) {
      result -= map[s[i]];
    } else {
      result += map[s[i]];
    }
  }

  // return result
  return result;
}

module.exports = romanToInt;