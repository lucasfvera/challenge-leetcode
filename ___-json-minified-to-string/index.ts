// It's not working as expected. I need to track the state and if the structure is nested.

function jsonParse(jsonStr: string): void {
    let newStr = '';
    let nested = 1

    for (let i = 0; i < jsonStr.length; i++) {
        const value = jsonStr[i]
        const tabs = () => Array(nested).fill(undefined).map(() => '\t').join('')

        if (i === 0) {
            newStr += value + '\n' + tabs()
            continue;
        }
        if (i === jsonStr.length - 1) {
            newStr += '\n' + value
            continue;
        }
        if (value === ':') {
            newStr += value + ' '
            continue;
        }
        if (value === ',') {
            newStr += value + '\n' + tabs()
            continue;
        }
        if (value === '[') {
            nested++
            newStr += value + '\n' + tabs()
            continue;
        }
        if (value === ']') {
            nested--
            newStr += '\n' + tabs() + value
            continue;
        }
        if (value === '{') {
            nested++
            newStr += value + '\n' + tabs()
            continue;
        }
        if (value === '}') {
            nested--
            newStr += '\n' + tabs() + value
            continue;
        }


        newStr += value
    }

    console.log(newStr)
}

const str = '{"name":"John","age":30,"interests":[["te:st"],"food","movies",{"some": 123}],"user":{"username":"john doe","city":"New York"}}'
jsonParse(str)