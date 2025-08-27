/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = 0;
    for (let i = nums1.length - n; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort((a, b) => a - b);
}
// Time complexity of O((m + n)log(m + n)) depending on the sort method

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

const nums3 = [0],
    m2 = 0,
    nums4 = [1],
    n2 = 1;

merge(nums3, m2, nums4, n2);
console.log(nums3);
