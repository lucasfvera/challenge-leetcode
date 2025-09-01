function majorityElement(nums) {
    const hashMap = new Map();
    let frequency = 0;
    let result;
    for (let i = 0; i < nums.length; i++) {
        let count;
        const value = nums[i];
        if (hashMap.has(value)) {
            count = hashMap.get(value) + 1;
        }
        else {
            count = 1;
        }
        if (count > frequency) {
            frequency = count;
            result = value;
        }
        hashMap.set(value, count);
    }
    // let max: number;
    // let result: number;
    // hashMap.forEach((val, key) => {
    //     if (max === undefined) {
    //         max = val;
    //         result = key;
    //     } else {
    //         if (val > max) {
    //             max = val;
    //             result = key;
    //         }
    //     }
    // });
    return result;
}
const nums = [
    [3, 2, 3],
    [2, 2, 1, 1, 1, 2, 2],
    [6, 6, 6, 6, 2, 2, 1, 1, 1, 2, 2, 1, 5, 4, 6],
    [6, 6, 6, 6, 2, 2, 1, 1, 1, 2, 2, 1, 5, 4, 6, 4, 4, 4, 4, 4, 4, 4, 1],
];
// Output: 3
// Output: 2
for (const n of nums) {
    console.log(majorityElement(n));
}
