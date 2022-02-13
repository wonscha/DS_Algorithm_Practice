// --- Origin
// LeetCode #15 (Medium)

// --- Directions
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// --- Examples
// nums = [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
// nums = [] => []
// nums = [0] => []


const threeSum = (nums) => {
  const results = [];

  // return blank array if number of elements is less than 3
  if (nums.length < 3) return results;
  
  // sort nums array in place
  nums.sort();

  // i represents the most left index
  for (let i = 0; i < nums.length - 2; i++) {

    // nums[i] is the smallest among three. 
    // if nums[i] is bigger than 0, it is impossible for the sum to be 0.
    if (nums[i] > 0) break; 

    // continue if the value has been processed once because we won't have duplicate
    if (nums[i] === nums[i-1]) continue;

    // j represents middle index, and k represents the last index
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        // if sum of three elements is 0, push it to results
        results.push([nums[i], nums[j], nums[k]]);

        // increment j and decrement k until these become new values
        while (nums[j] === nums[j+1]) j++;
        while (nums[k] === nums[k-1]) k--;
        j++;
        k--;
      } else if (sum > 0) {
        // if sum of three elements is bigger than 0, decrement k by 1
        // becuase we need smaller sum of nums[j] and nums[k] (j increments and k decrements only)
        k--;
      } else {
        // if sum of three elements is less than 0, increment j by 1
        j++;
      }
    }
  }

  return results;
}

module.exports = threeSum;