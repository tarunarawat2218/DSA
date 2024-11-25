// You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].

// You should build a set s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... } subjected to the following rule:

// The first element in s[k] starts with the selection of the element nums[k] of index = k.
// The next element in s[k] should be nums[nums[k]], and then nums[nums[nums[k]]], and so on.
// We stop adding right before a duplicate element occurs in s[k].
// Return the longest length of a set s[k].


var nestingArray(nums){
    var max = 0;
    function calculatedLength(start){
     let length = 0;
     while(nums[start] !== -1){
        let nextValue = nums[start]
        nums[start] =-1;
        start = nextValue;
        length++;
     }
     return length;
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== -1){
            max = Math.max(max,calculatedLength(i));
        }
    }
    return max;
}