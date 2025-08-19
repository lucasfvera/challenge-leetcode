import { measureExecution } from "./utils/measureExecution.js";
import { twoSum as bruteTwoSum } from "./bruteForce.js";
import { twoSum as twoPointersTwoSum } from "./optimized.js";

const measuredTwoSumBrute = measureExecution(bruteTwoSum);
const measuredTwoPointersTwoSum = measureExecution(twoPointersTwoSum);

const ex1 = [2, 7, 11, 15];
const target1 = 9;
const expected1 = [0, 1];
const result1 = measuredTwoSumBrute(ex1, target1);
const result1b = measuredTwoPointersTwoSum(ex1, target1);
console.log("Output brute: ", result1);
console.log("Output: ", result1b);

const ex2 = [3, 2, 4];
const target2 = 6;
const expected2 = [1, 2];
const result2 = measuredTwoSumBrute(ex2, target2);
const result2b = measuredTwoPointersTwoSum(ex2, target2);
console.log("Output brute: ", result2);
console.log("Output: ", result2b);

const ex3 = [3, 3];
const target3 = 6;
const expected3 = [0, 1];
const result3 = measuredTwoSumBrute(ex3, target3);
const result3b = measuredTwoPointersTwoSum(ex3, target3);
console.log("Output brute: ", result3);
console.log("Output: ", result3b);
