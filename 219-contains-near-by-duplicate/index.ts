// Time O(n^2) and space O(n)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const tracker = new Map();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (!tracker.has(val)) {
            tracker.set(val, []);
        } else {
            const indexes = tracker.get(val);
            let found = false;
            indexes.forEach((v) => {
                if (Math.abs(v - i) <= k) {
                    found = true;
                }
            });
            if (found) return true;
        }
        tracker.get(val).push(i);
    }
    return false;
}

// The indices are ordered, and we know that [m, n, o, p ...] m < n < o < p.
// This means that the distance |i - j| between m and n is greater that m and o.
// That's why we can discard the previous indexes and just compare the most
// recent.
function containsNearbyDuplicateOptimized(nums: number[], k: number): boolean {
    const tracker = new Map();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (tracker.has(val)) {
            // Means that we already found it in the array
            const index = tracker.get(val);
            if (i - index <= k) {
                return true;
            }
        }
        tracker.set(val, i);
    }
    return false;
}

// const nums = [1,2,3,1], k = 3
// Output: true

const nums = [1, 0, 1, 1],
    k = 1;
// Output: true

// const nums = [1,2,3,1,2,3], k = 2
// Output: false

console.log(containsNearbyDuplicateOptimized(nums, k));
