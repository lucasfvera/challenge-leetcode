// Brute force -> O(n^2)
function removeElement(nums, val) {
    let aux = [];
    for (let i = 0; i < nums.length; i++) {
        // O(n)
        if (nums[i] !== val)
            aux.push(nums[i]);
    }
    nums.splice(0, aux.length, ...aux); // O(n)
    return aux.length;
}
function removeElementTwoPointers(nums, val) {
    let target = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[target] = nums[i];
            target++;
        }
    }
    return target;
}
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
const ex = [3, 2, 2, 3, 4, 3, 1, 5];
const result = removeElementTwoPointers(ex, 3);
console.log(ex);
console.log(result);
