// --- Origin
// LeetCode #9 (Easy)

// --- Directions
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// --- Examples
// x = 121 => true
// x = -121 => false
// x = 10 => false

const isPalindrome = (x) => {
  // 1. convert parameter to string: '121'
  // 2. split the string: ['1', '2', '1']
  // 3. reverse the order: ['1', '2', '1']
  // 4. join the elements: '123'
  // 5. parse integer: 123
  // 6. compare the result with the original value
  return x === parseInt(x.toString().split('').reverse().join(''))
}

module.exports = isPalindrome;