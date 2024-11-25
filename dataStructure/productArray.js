// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var answer = new Array(nums.length).fill(1)
    var prefix = 1
    var suffix =1
    for(let i =0; i <nums.length; i++){
        answer[i] = prefix
        prefix *= nums[i]
    }
    for(let i =nums.length -1; i >=0; i--){
        answer[i] *= suffix;
        suffix *= nums[i]
    }
    return answer;
};