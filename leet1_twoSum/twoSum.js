// --- Origin
// LeetCode #1 (Easy)

// --- Directions
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// --- Examples
// nums = [2, 7, 11, 15], target = 9; output = [0, 1]
// nums = [3, 2, 4], target = 6; output = [1, 2]
// nums = [3, 3], target = 6; output = [0, 1]

const twoSum = (nums, target) => {
  // create hashmap instance
  hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    // get complement (number required for target)
    complement = (target - nums[i]).toString();
    
    // if hashmap contains complement as a key, return array of indexes 
    if (hashmap.hasOwnProperty(complement)) {
      return [i, hashmap[complement]];
    }

    // if hashmap does not contain complement, register
    hashmap[nums[i]] = i;
  }
}

module.exports = twoSum;