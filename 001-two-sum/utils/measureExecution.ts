export function measureExecution(fn: Function) {
    const newFn = (...args) => {
        console.time(fn.name);
        const result = fn(...args);
        console.timeEnd(fn.name);
        return result;
    };

    return newFn;
}
