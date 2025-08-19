function longestCommonPrefix(strs) {
    let result = "";
    // Find shortest array O(n)
    const shortestWord = strs.reduce((resultString, currString) => {
        if (currString.length < resultString.length) {
            return currString;
        }
        else {
            return resultString;
        }
    });
    result = shortestWord;
    for (let i = 0; i < strs.length; i++) {
        let sliced = strs[i].slice(0, result.length);
        while (!result.startsWith(sliced) && sliced.length > 1) {
            sliced = sliced.slice(0, sliced.length - 1);
        }
        if (sliced.length === 1 && !result.startsWith(sliced)) {
            result = "";
            break;
        }
        else {
            console.log(sliced);
            console.log(result);
            result = sliced;
        }
    }
    return result;
}
// Brute force
// 1. Grab the shortest word -> "flaw"
// 2. Slice that length from the target word -> flaw = 4, "flower" slice 4 -> "flow"er
// 3. Compare if the shortest (flaw) starts with the sliced array (flow)
//      if not, slice 1 from the sliced array and do it again
// 5. E.g. "fi/rst"
// 6. E.g "t/urn"
const ex = ["flaw", "fl", "flower", "flawless", "flo", "f"];
const ex1 = ["car", "cir"];
console.log(longestCommonPrefix(ex1));
