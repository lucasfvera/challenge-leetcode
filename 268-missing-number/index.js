// Brute force approach with complexity of O(n^2)
function bruteForceMissingNumber(nums) {
    const n = nums.length;
    for (let i = 0; i <= n; i++) {
        if (nums.some((el) => el === i)) {
            continue;
        }
        else {
            return i;
        }
    }
}
function missingNumber(nums) {
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        result += i - nums[i];
    }
    return result;
}
const nums = [
    [3, 0, 1],
    [0, 1],
    [9, 6, 4, 2, 3, 5, 7, 0, 1],
];
// Out 2
// Out 2
// Out 8
for (const n of nums) {
    console.log(missingNumber(n));
}
// [3,0,1]
/**
n = 3

0,1,2,3
 */
