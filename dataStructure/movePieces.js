// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

// The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
// The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.


/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    // Step 1: Remove '_' and compare filtered sequences
    const filteredStart = start.replace(/_/g, "");
    const filteredTarget = target.replace(/_/g, "");

    // If filtered sequences are not the same, return false
    if (filteredStart !== filteredTarget) {
        return false;
    }

    // Step 2: Validate movements
    let startPointer = 0;
    let targetPointer = 0;

    while (startPointer < start.length && targetPointer < target.length) {
        // Skip '_' in both strings
        while (start[startPointer] === "_") startPointer++;
        while (target[targetPointer] === "_") targetPointer++;

        // If one pointer reaches the end while the other hasn't, return false
        if (startPointer === start.length || targetPointer === target.length) {
            break;
        }

        // Check if character positions align with movement rules
        if (start[startPointer] !== target[targetPointer]) {
            return false; // Mismatched characters
        }

        if (
            (start[startPointer] === "L" && startPointer < targetPointer) || // 'L' can't move right
            (start[startPointer] === "R" && startPointer > targetPointer)   // 'R' can't move left
        ) {
            return false;
        }

        // Move to the next character
        startPointer++;
        targetPointer++;
    }

    return true;
};
