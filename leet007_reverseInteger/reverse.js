// --- Origin
// LeetCode #7 (Medium)

// --- Directions
// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// --- Examples
// x = 123 => 321
// x = -123 => -321
// x = 120 => 21

const reverse = (x) => {
  let reverse = 0;

  while (x) {
    // take last digit from x and add it to reverse multiplied by 10
    reverse = reverse * 10 + x % 10;
    // remove last digit
    x = parseInt( x / 10 );
  }

  // check if reverse sits in 32-bit integer and retrun
  if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) return 0;
  return reverse;
}

module.exports = reverse;