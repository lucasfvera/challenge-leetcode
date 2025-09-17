function frequency(n, arr) {
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < n; i++) {
        const val = arr[i];
        let freq = map.get(val);
        if (freq !== undefined) {
            freq++;
            map.set(val, freq);
        }
        else {
            map.set(val, 1);
        }
    }
    const ordered = [];
    const keys = [];
    map.forEach((freq, key) => {
        keys.push(key);
    });
    for (let i = 0; i < map.size; i++) {
        const key = keys[i];
        const freq = map.get(key);
        if (i === 0) {
            ordered.push(key);
            continue;
        }
        for (let j = 0; j < map.size; j++) {
            if (i === j)
                continue;
            const currKey = keys[j];
            const currFreq = map.get(currKey);
            if (currFreq > freq) {
                ordered.splice(i - 1, 0, currKey);
            }
            else if (currFreq === freq) {
                if (currKey > key) {
                    ordered.splice(i, 0, currKey);
                }
                else {
                    ordered.splice(i - 1, 0, currKey);
                }
            }
            else {
                ordered.splice(i, 0, key);
            }
        }
    }
    console.log(ordered);
    let last = [];
    ordered.forEach(el => {
        const f = map.get(el);
        let i = 0;
        while (i < f) {
            last.push(el);
            i++;
        }
    });
    console.log(last.join(" "));
}
const n = 6;
const arr = [5, 5, 4, 4, 6, 3];
frequency(n, arr);
