// Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] inclusive can be formed by the sum of some elements in the array.

// Return the minimum number of patches required.


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    var sumFormed = 0;
    var minPatches =0;
    var i =0;
    while(sumFormed<n){
        if(i < nums.length && nums[i] <= sumFormed + 1){
            sumFormed += nums[i];
            i++
        }else{

                sumFormed +=sumFormed +1;
            }
        
    }
        return minPatches;
};