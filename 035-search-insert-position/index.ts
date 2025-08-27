function searchInsert(nums: number[], target: number): number {
    if (nums.length === 1) {
        const value = nums[0];
        if (value === target) {
            return 0;
        } else if (value > target) {
            return 0;
        } else {
            return 1;
        }
    } else if (nums.length === 0) {
        return 0;
    }

    const middleIndex = Math.floor(nums.length / 2);
    const value = nums[middleIndex];

    if (value === target) {
        return middleIndex;
    } else if (value > target) {
        const leftSideArray = nums.slice(0, middleIndex);
        const index = searchInsert(leftSideArray, target);
        return index; // change the -1
    } else {
        const rightSideArray = nums.slice(middleIndex + 1);
        const index = searchInsert(rightSideArray, target);
        return index + nums.length - rightSideArray.length;
    }
}

// 1,3,5,6 -> 5
// 2 ->

const nums1 = [1, 3, 5, 6],
    target1 = 4;
// Output: 2
console.log(searchInsert(nums1, target1));

const nums2 = [1, 3, 5, 6],
    target2 = 2;
// Output: 1
console.log(searchInsert(nums2, target2));

const nums3 = [1, 3, 5, 6],
    target3 = 7;
// Output: 4
console.log(searchInsert(nums3, target3));
