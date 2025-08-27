// Doesn't work for large inputs bc it rounds up to 0
function bruteForcePlusOne(digits) {
    let exp = 0;
    let flatNum = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        flatNum += digits[i] * Math.pow(10, exp);
        exp++;
    }
    const result = (flatNum + 1).toString();
    const arr = [];
    for (const n of result) {
        arr.push(parseInt(n));
    }
    return arr;
}
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }
}
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
const longArray = new Array(10).fill(9);
const examples = [[1, 2, 3], [4, 3, 2, 1], [9], [9, 9], longArray];
for (const e of examples) {
    console.log(bruteForcePlusOne(e));
}
