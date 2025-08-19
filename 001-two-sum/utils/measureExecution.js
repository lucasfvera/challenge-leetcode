export function measureExecution(fn) {
    const newFn = (...args) => {
        console.time(fn.name);
        const result = fn(...args);
        console.timeEnd(fn.name);
        return result;
    };
    return newFn;
}
