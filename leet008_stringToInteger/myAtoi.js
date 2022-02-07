// --- Origin
// LeetCode #8 (Medium)

// --- Directions
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer 
// (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// 1. Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. 
//    This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. 
//    Change the sign as necessary (from step 2).
// 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. 
//    Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// 6. Return the integer as the final result.

// --- Examples
// s = "42" => 42
// s = "   -42" => -42
// s = "4193 with words" => 4193

const myAtoi = (s) => {
    let result = '', numSign = 0;
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const signs = ['+', '-'];
    
    // trim string
    s = s.trim(); 

    // if string does not start from a digit or a sign, return 0     
    if (signs.includes(s[0]) && digits.includes(s[1])) {
        result += s[0];
        s = s.slice(1);
    } else if (!digits.includes(s[0])) {
        return 0
    }

    // add digits to results iterating until it encounters non-digit character
    for (let char of s) {
        if (digits.includes(char)) {
            result += char;
        } else {
            break;
        }
    }
    
    // clamp the integer between -2^31 and 2^31-1. 
    return Math.min(Math.pow(2, 31) - 1, Math.max(Math.pow(-2, 31), parseInt(result)));

}

module.exports = myAtoi;