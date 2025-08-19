function removeDuplicates(nums: number[]): number {
    const set = new Set(nums);
    nums.splice(0, set.size, ...set);
    return set.size;
}

// Time complexity of O(n^2)
function removeDuplicatesHelperBucket(nums: number[]): number {
    const map: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        // O(n)
        const value = nums[i]; // O(1)
        if (!map.includes(value)) {
            // O(n)
            map.push(value); // O(1)
        }
    }

    nums.splice(0, map.length, ...map); // O(n)

    console.log(nums);
    return map.length;
}

// Time complexity of O(n)
function removeDuplicatesTwoPointers(nums: number[]): number {
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
