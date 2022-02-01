// --- Origin
// LeetCode #6 (Medium)

// --- Directions
// 
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// 
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// --- Examples
// s = "PAYPALISHIRING", numRows = 3 => "PAHNAPLSIIGYIR"
// s = "PAYPALISHIRING", numRows = 4 => "PINALSIGYAHRPI"
// s = "A", numRows = 1 => "A"

const convert = (s, numRows) => {
  const rows = []; // where string in each row stored
  let row = 0, step = 1; // designate current row and step to add
    
  for (let i = 0; i < s.length; i++) {
    // add the char to current row string
    rows[row] = rows[row] ? rows[row] + s[i] : s[i]; 
    
    // update the row
    row += step;
    // if it hit the border, turn the direction
    if (row === numRows - 1 || row === 0) step *= -1; 
  }
    
  return rows.join('') // join all the rows and return
}

module.exports = convert;