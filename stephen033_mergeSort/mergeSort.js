// --- Directions
// Implement merge sort

const mergeSort = (arr) => {

  // base case of recursive function 
  if (arr.length === 1) {
    return arr;
  }

  // get center index of array
  const center = Math.floor(arr.length / 2);
  // split array into two arrays; left and right
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // invoke functions recursively
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  // create an array
  const results = [];

  // iterate while both arrays have elements
  while (left.length && right.length) {

    // compare the first elements of both array and push the smaller one to results array
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }  

  // concatenate results and leftover array, and return
  return [...results, ...left, ...right];
}

module.exports = { mergeSort, merge };