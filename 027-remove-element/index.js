// Brute force
function removeElement(nums, val) {
    let aux = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val)
            aux.push(nums[i]);
    }
    nums.splice(0, aux.length, ...aux);
    console.log(nums);
    return aux.length;
}
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
const result = removeElement([3, 2, 2, 3], 3);
console.log(result);
