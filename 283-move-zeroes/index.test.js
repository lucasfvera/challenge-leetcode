import assert from 'node:assert';
import { describe, it } from 'node:test';
import { moveZeroes, moveZeroesOptimized } from './index.js';

describe('#moveZeros', () => {
    it('Moves zeroes to the end of the array', () => {
        const nums = [0, 1, 0, 3, 12];
        const expectedResult = [1, 3, 12, 0, 0];
        moveZeroes(nums);

        assert.deepEqual(nums, expectedResult);
    });
    it('array extremely long', () => {
        const nums = new Array(100000).fill(1);
        nums[0] = 0;
        nums[5] = 0;
        nums[18] = 0;
        const expectedResult = new Array(100000).fill(1);
        expectedResult[99997] = 0;
        expectedResult[99998] = 0;
        expectedResult[99999] = 0;
        moveZeroes(nums);

        assert.deepEqual(nums, expectedResult);
    });
    it('array extremely long - optimized', () => {
        const nums = new Array(100000).fill(1);
        nums[0] = 0;
        nums[5] = 0;
        nums[18] = 0;
        const expectedResult = new Array(100000).fill(1);
        expectedResult[99997] = 0;
        expectedResult[99998] = 0;
        expectedResult[99999] = 0;
        moveZeroesOptimized(nums);

        assert.deepEqual(nums, expectedResult);
    });
    it('Moves zeroes to the end of the array - optimized', () => {
        const nums = [0, 1, 0, 3, 12];
        const expectedResult = [1, 3, 12, 0, 0];
        moveZeroesOptimized(nums);

        assert.deepEqual(nums, expectedResult);
    });
});
