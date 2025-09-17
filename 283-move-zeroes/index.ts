/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    nums[i] = nums[j]
                    nums[j] = 0
                    break;
                }
            }
        }
    }
};

export function moveZeroesOptimized(nums: number[]): void {
    let zeroPosition;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && zeroPosition === undefined) {
            zeroPosition = i
        } else if (nums[i] !== 0 && zeroPosition !== undefined) {
            nums[zeroPosition] = nums[i]
            nums[i] = 0
            zeroPosition++
        }
    }
};

// const nums = [0, 1, 0, 3, 12]
const nums = [0]
moveZeroesOptimized(nums)
console.log(nums)