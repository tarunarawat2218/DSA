// You are given two 0-indexed strings str1 and str2.

// In an operation, you select a set of indices in str1, and for each index i in the set, increment str1[i] to the next character cyclically. That is 'a' becomes 'b', 'b' becomes 'c', and so on, and 'z' becomes 'a'.

// Return true if it is possible to make str2 a subsequence of str1 by performing the operation at most once, and false otherwise.

// Note: A subsequence of a string is a new string that is formed from the original string by deleting some (possibly none) of the characters without disturbing the relative positions of the remaining characters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    // Check if str2 can be a subsequence of str1 after at most one operation
    const n = str1.length;
    const m = str2.length;

    let j = 0; // Pointer for str2

    for (let i = 0; i < n; i++) {
        if (j < m) {
            // Match either original character or the incremented character
            if (str1[i] === str2[j] || nextChar(str1[i]) === str2[j]) {
                j++;
            }
        }
    }

    // If we've matched all characters of str2, it's a subsequence
    return j === m;
}

// Helper function to get the next cyclic character
function nextChar(char) {
    return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
}
