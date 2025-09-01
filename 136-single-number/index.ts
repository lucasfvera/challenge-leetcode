function singleNumber(nums: number[]): number {
    const hash = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hash.has(num)) {
            hash.delete(num);
        } else {
            hash.add(num);
        }
    }
    let num;
    hash.forEach((el) => (num = el));
    return num;
}
