// --- Origin
// LeetCode #31 (Medium)

// --- Directions
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. 
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, 
// then the next permutation of that array is the permutation that follows it in the sorted container. 
// If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// --- Examples
// nums = [1,2,3] => [1,3,2]
// nums = [3,2,1] => [1,2,3]
// nums = [1,1,5] => [1,5,1]

// --- Constraints
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

const nextPermutation = (nums) => {
    
  for (let i = nums.length - 2; i >= 0; i--) {
    // find the index of the first two numbers in ascending order - i
    if (nums[i] < nums[i+1]) { 

        // find the index of next large number to num at position i
        // within numbers following
        let idxNextLarge = findNextLargeNum(i, nums);

        // swap number at i and next large number
        swap(nums, i, idxNextLarge);

        // reverse the order of numbers at positions later than i
        reverse(nums, i+1);
        return;
    }
  }

  reverse(nums, 0);
}

const findNextLargeNum = (idx, nums) => {
  let base = nums[idx];
  let nextLarge = Infinity;
  let idxNextLarge = -1
  for (let i = idx; i < nums.length; i++) {
      if (nums[i] > base && nums[i] <= nextLarge) {
          nextLarge = nums[i];
          idxNextLarge = i;
      }
  }
  return idxNextLarge;
}

const swap = (nums, idx1, idx2) => {
  [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
}

const reverse = (nums, idx) => {
  let start = idx, end = nums.length - 1;
  while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
  }
}

module.exports = nextPermutation;