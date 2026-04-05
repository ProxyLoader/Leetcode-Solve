/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  // Create a hash map (object) to store numbers we've seen and their indices
  const map = {};

  // Loop through the array once â O(n) time complexity
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]; // Current number in the loop
    const complement = target - current; // The number we need to reach the target

    // Check if the complement already exists in the map
    if (map.hasOwnProperty(complement)) {
      // If yes, we found the pair â return their indices
      return [map[complement], i];
    }

    // Otherwise, store the current number and its index in the map
    // Example: if nums[i] = 2, we store { 2: i }
    map[current] = i;
  }

  // If no pair is found (shouldn't happen according to problem constraints)
  return [];

};