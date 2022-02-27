// --- Origin
// LeetCode #22 (Medium)

// --- Directions
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// --- Examples
// n = 3 => ["((()))","(()())","(())()","()(())","()()()"]
// n = 1 => ["()"]

// --- Constraints
// 1 <= n <= 8

const generateParenthesis = (n) => {
    const results = [] // array to return
    
    // s: string with parentheses
    // l: reamining open parenthesis, r: remaining close parenthesis
    const addParenthesis = (s, l, r) => { 

        // base case
        if (l === 0 && r === 0) return results.push(s)

        // in case all parentheses are closed, use only opening parenthesis
        if (l === r) return addParenthesis(s + "(", l-1, r)

        // when parentheses are remaining, invoke recursive function
        if (l > 0) addParenthesis(s + "(", l - 1, r)    
        if (r > 0) addParenthesis(s + ")", l, r - 1)
    }
    
    // start a recursive function
    addParenthesis("", n, n)

    return results;
};

module.exports = generateParenthesis;