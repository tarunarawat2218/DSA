// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
    let increasing = true, decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) decreasing = false;
        if (nums[i] < nums[i - 1]) increasing = false;

        // Early exit: if both flags are false, the array is not monotonic
        if (!increasing && !decreasing) return false;
    }

    return true;
}
