export function twoSum(nums, target) {
    const sortedArray = [...nums].sort((a, b) => a - b);
    let result = []; // this has the 2 indexes
    let left = 0;
    let right = sortedArray.length - 1; // end of the array
    // [3, 2, 4]
    while (left < right) {
        const leftValue = sortedArray[left];
        const rightValue = sortedArray[right];
        const valuesSum = leftValue + rightValue;
        if (valuesSum === target) {
            const originalIndexLeft = nums.indexOf(leftValue);
            const originalIndexRight = nums.indexOf(rightValue) === originalIndexLeft
                ? nums.indexOf(rightValue, originalIndexLeft + 1)
                : nums.indexOf(rightValue);
            result = [originalIndexLeft, originalIndexRight];
            return result;
        }
        else if (valuesSum < target) {
            left++;
        }
        else if (valuesSum > target) {
            right--;
        }
    }
    if (!result.length)
        console.log("Didn't found a valid combination");
    return result;
}
