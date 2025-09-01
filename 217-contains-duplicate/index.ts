function containsDuplicate(nums: number[]): boolean {
    const tracker = new Set();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (tracker.has(val)) {
            return true;
        }
        tracker.add(val);
    }
    return false;
}
