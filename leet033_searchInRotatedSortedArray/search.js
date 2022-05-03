// --- Origin
// LeetCode #33 (Medium)

// --- Directions
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// --- Examples
// nums = [4,5,6,7,0,1,2], target = 0 => 4
// nums = [4,5,6,7,0,1,2], target = 3 => -1
// nums = [1], target = 0 => -1

// --- Constraints
// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -10^4 <= target <= 10^4

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // get mid index
    const mid = Math.floor((left + right) / 2); 

    // if num at mid is equal to target, return mid
    if (target === nums[mid]) return mid;

    // if left and right point has met, return -1
    if (left === right) return -1;

    if (nums[left] < nums[mid]) { // if left side of mid is increasing 
      if (target >= nums[left] && target < nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else { // if right side of mid is increasing
      if (target >= nums[mid+1] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
}

module.exports = search;

