function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const n = cin();
    const lines = new Array(n + 1).fill(0).map(() => [])
    for (let i = 0; i < n - 1; i ++) {
        const a = cin(), b = cin();
        lines[a].push(b)
        lines[b].push(a)
    }

    const countArr = new Array(n + 1).fill(0);
    const stack = [[1, 0, -1]];
    while (stack.length) {
        const [index, i, p] = stack[stack.length - 1];
        const nb = lines[index];
        if (i < nb.length) {
            stack[stack.length - 1][1] ++
            if (nb[i] !== p) {
                stack.push([nb[i], 0, index])
            }
        } else {
            stack.pop();
            if (nb.length === 1 && nb[0] === p) {
                countArr[index] = 1
            }
            countArr[p] += countArr[index]
        }
    }

    const q = cin();
    for (let i = 0; i < q; i ++) {
        const a = cin(), b = cin();
        cout(countArr[a] * countArr[b]);
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.trim().split(/\s+/), cid=0;
    main();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    console.log(...args);
}