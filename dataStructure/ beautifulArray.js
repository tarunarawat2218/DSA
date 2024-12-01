// An array nums of length n is beautiful if:

// nums is a permutation of the integers in the range [1, n].
// For every 0 <= i < j < n, there is no index k with i < k < j where 2 * nums[k] == nums[i] + nums[j].
// Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.



/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    var ans = [1];
    while(ans.length < n){
    var temp = []
        for(let el of ans){
         if(2*el -1 <=n){
            temp.push(2*el - 1)
         }
        }
        for(let el of ans){
            if(2*el <=n){
                temp.push(2*el)
            }
        }
        ans = temp;
    }
    var res = new Array(n)
    for(let i =0; i<n; i++){
        res[i] = ans[i]
    }
    return res;

};