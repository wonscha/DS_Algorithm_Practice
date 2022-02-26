// --- Origin
// LeetCode #20 (Easy)

// --- Directions
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//    Open brackets must be closed by the same type of brackets.
//    Open brackets must be closed in the correct order.

// --- Examples
// s = "()" => true
// s = "()[]{}" => true
// s = "(]" => false

// --- Constraints
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

const isValid = (s) => {
    
    // create parentheses pair object
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // stack instantiation
    const stack = [];
    
    // interate over chars of the input string
    for (let bracket of s) {

        // if char is open parens, push it to stack
        if (Object.keys(pairs).includes(bracket)) {
            stack.push(bracket)
            continue;
        } 
        
        // if char is close parens, check it to last elem in stack
        // if it pairs up, pop it. Or, return false
        if (pairs[stack[stack.length - 1]] === bracket) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    // if nothing left in stack, return true, or false
    if (stack.length === 0) return true;
    return false;
};

module.exports = isValid;