function frequency(n: number, arr: number[]): void {
    const map = new Map()
    const set = new Set()

    for (let i = 0; i < n; i++) {
        const val = arr[i]
        let freq = map.get(val)
        if (freq !== undefined) {
            freq++
            map.set(val, freq)
        } else {
            map.set(val, 1)
        }
    }


    const keys = []
    map.forEach((freq, key) => {
        keys.push(key)
    })

    // I need to order the keys by frequency.

    // This is a kind of selection sort O(n^2)
    for (let i = 0; i < keys.length; i++) {
        let max_idx = i
        for (let j = i + 1; j < keys.length; j++) {
            const max_key = keys[max_idx]
            const max_freq = map.get(max_key)
            const currKey = keys[j]
            const currFreq = map.get(currKey)
            if (currFreq > max_freq || (currFreq === max_freq && currKey < max_key)) {
                max_idx = j
            }

        }
        let temp = keys[max_idx]
        keys[max_idx] = keys[i]
        keys[i] = temp
    }


    let last = []
    keys.forEach(el => {
        const f = map.get(el)
        let i = 0
        while (i < f) {
            last.push(el)
            i++
        }
    })

    console.log(last.join(" "))
}

// const n = 6
// const arr = [5, 5, 4, 4, 6, 3]

const n = 5
const arr = [3, 3, 2, 2, 1]

frequency(n, arr)