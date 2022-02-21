// --- Origin
// LeetCode #18 (Medium)

// --- Directions
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//  - 0 <= a, b, c, d < n
//  - a, b, c, and d are distinct.
//  - nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// --- Examples
// nums = [1,0,-1,0,-2,2], target = 0 => [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// nums = [2,2,2,2,2], target = 8 => [[2,2,2,2]]

const fourSum = (nums, target) => {
  
  nums.sort((a, b) => a - b); // sort nums array
  const results = []; // array to return
  if (nums.length < 4) return results; // if number of elements less than 4, return empty

  // a and b represent first and second pointers of nums array.
  // a and b iterate over the array one by one
  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      
      // c and d represent third and last pointers
      // c only moves forward and d only moves backward
      let c = b + 1;
      let d = nums.length - 1;

      while (c < d) {
        // get sum of all elements that pointers are pointing at
        const sum = nums[a] + nums[b] + nums[c] + nums[d];

        if (sum === target) {
          // push the set of elements to results if the sum matches target
          results.push([nums[a], nums[b], nums[c], nums[d]]);

          // move the third and forth pointers
          while (nums[c] === nums[c+1]) c++;
          while (nums[d-1] === nums[d]) d--;
          c++;
          d--;
        } else if (sum < target) {

          // if sum is smaller than target, increment the third pointer
          while (nums[c] === nums[c+1]) c++;
          c++;
        } else {

          // if sum is larget than target, decrement the forth pointer
          while (nums[d-1] === nums[d]) d--;
          d--;
        }
      }
      // in case the same elelement repeats in the second pointer
      while (nums[b] === nums[b+1]) b++; 
    }
    // in case the same element repeats in the first pointer
    while (nums[a] === nums[a+1]) a++; 
  }
  
  return results;
};

module.exports = fourSum;