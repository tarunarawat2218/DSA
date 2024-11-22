// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.


var findMaxLength = function(nums) {
    var hashMap = {}
    var sum =0;
    var maxLength = 0;

    hashMap[0] = -1

    for(let i = 0; i<nums.length; i++){
        sum += nums[i] === 0 ? -1 : 1;
        if(hashMap.hasOwnProperty(sum)){
            let length = i - hashMap[sum]
            maxLength = Math.max(maxLength, length)
        }else{
            hashMap[sum] = i
        }
    }
    return maxLength;
};