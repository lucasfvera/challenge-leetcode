// Brute force solution complexity O(n^2)
export function twoSum(nums, target) {
    let result = []; // this has the 2 indexes
    let found = false;
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (j === i)
                continue;
            const second = nums[j];
            if (first + second === target) {
                result = [i, j];
                found = true;
                break;
            }
        }
        if (found)
            break;
    }
    if (!result.length)
        console.log("Didn't found a valid combination");
    return result;
}
