// --- Origin
// LeetCode #27 (Easy)

// --- Directions
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// --- Examples
// nums = [3,2,2,3], val = 3 => 2, nums = [2,2,_,_]
// nums = [0,1,2,2,3,0,4,2], val = 2 => 5, nums = [0,1,4,0,3,_,_,_]

// --- Constraints
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

const removeElement = (nums, val) => {
  let i = 0; // pointer to write numbers not equal to val

  // pointer j traverse nums array.
  // when it encounters elements not equal to val,
  // it assigns to position where pointer i locates.
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] === val) continue;
      nums[i++] = nums[j]
  }

  // number of elements that's not equal to val in nums array
  return i;
};

module.exports = removeElement;