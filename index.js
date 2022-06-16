function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let m = 0; m < array.length; m++) {
    const complement = target - array[m];
    for (let l = m + 1; l < array.length; l++) {
      if (array[l] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    iterate over the remaining numbers in the array
      check if any of the remaining numbers is the complement
      if so, return true
 if we reach the end of the array, return false
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
