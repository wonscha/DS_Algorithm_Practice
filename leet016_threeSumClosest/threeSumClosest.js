// --- Origin
// LeetCode #16 (Medium)

// --- Directions
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// --- Examples
// nums = [-1,2,1,-4], target = 1 => 2
// nums = [0,0,0], target = 1 => 0

const threeSumClosest = (nums, target) => {
    
    // sort nums array in ascending order
    nums.sort((a, b) => a - b);

    // set closestSum to infinity
    let closestSum = Infinity;
    
    // iterate over nums array. i represents the left most index
    for (let i = 0; i < nums.length - 2; i++) {
        
        let j = i + 1; // j represents the index in the middle
        let k = nums.length - 1; // k represents the right most index
        
        while (j < k) {

            // take sum of all elements
            const sum = nums[i] + nums[j] + nums[k];
            
            // if current sum is the closest to target, replace the closestSum with it
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            
            
            if (sum === target) {
                // if sum matches target, return sum immediately
                return sum;
            } else if (sum > target) {
                // if sum is larger than target, decrement k to decrese the sum
                k--;
            } else {
                // if sum is smaller than target, increment j to increase the sum
                j++;
            }
        }
    }
    
    // return the closest sum.
    return closestSum;
}

module.exports = threeSumClosest;