// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



function anagrams(stringA, stringB) {
  // clean strings (remove chars other than alphabet, lowercase, and sort)
  const cleanedStringA = stringA.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
  const cleanedStringB = stringB.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');

  // evaluate if cleaned strings are the same
  return cleanedStringA === cleanedStringB;
}

module.exports = anagrams;