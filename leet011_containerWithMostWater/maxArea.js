// --- Origin
// LeetCode #11 (Medium)

// --- Directions
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// --- Examples
// height = [1,8,6,2,5,4,8,3,7] => 49
// height = [1,1] => 1

const maxArea = (height) => {

  let left = 0; // left index starting from 0
  let right = height.length - 1; // right index starting from the last element
  let maxAmount = 0; // maximum amount of water

  while (left < right) {

    // get amount and update maxAmount if it's bigger than before
    const amount = (right - left) * Math.min(height[left], height[right]);
    maxAmount = Math.max(maxAmount, amount);

    // compare height of left and right and move index of shorter side by one
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxAmount;
}

module.exports = maxArea;