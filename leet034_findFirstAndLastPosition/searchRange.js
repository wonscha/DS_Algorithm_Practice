// --- Origin
// LeetCode #34 (Medium)

// --- Directions
// Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// --- Examples
// nums = [5,7,7,8,8,10], target = 8 => [3, 4]
// nums = [5,7,7,8,8,10], target = 6 => [-1, -1]
// nums = [], target = 0 => [-1, -1]

// --- Constraints
// 0 <= nums.length <= 10%5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

const searchRange = (nums, target) => {
  // corner case handling
  if (nums.length === 0) return [-1, -1];

  // pointers
  let left = 0;
  let right = nums.length - 1;
  let mid;

  // binary search
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // case when target doesn't exist in the array
  if (nums[mid] !== target) return [-1, -1];

  // find first and last position of element
  let start = mid;
  let end = mid;
  while(nums[start-1] === target) start--;
  while(nums[end+1] === target) end++;

  return [start, end];
}

module.exports = searchRange;
