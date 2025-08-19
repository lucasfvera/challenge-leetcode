function removeDuplicates(nums) {
    const set = new Set(nums);
    nums.splice(0, set.size, ...set);
    return set.size;
}
function removeDuplicatesHashMap(nums) {
    const map = [];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (!map.includes(value)) {
            map.push(value);
        }
    }
    nums.splice(0, map.length, ...map);
    console.log(nums);
    return map.length;
}
function removeDuplicatesTwoPointers(nums) {
    let target = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[target] !== nums[j]) {
            target++;
            nums[target] = nums[j];
        }
    }
    return target + 1;
}
const ex = [1, 1, 2, 2, 2, 3, 4, 5, 5];
const result = removeDuplicatesTwoPointers(ex);
console.log(ex);
console.log(result);
