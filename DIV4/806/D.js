function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    let num = cin();
    const arr = new Array(num);
    for (let i = 0; i < num; i ++) {
        arr[i] = cinS();
    }
    const res = new Array(num).fill(0)
    const set = new Set(arr);
    for (let i = 0; i < num; i ++) {
        const str = arr[i]
        for (let j = 1; j < str.length; j ++) {
            if (set.has(str.slice(0, j)) && set.has(str.slice(j))) {
                res[i] = 1
                break;
            }
        }
    }
    cout(res.join(''))
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\r\n|\n/), cid=0;
    solve();
})

function cin() {
    return Number(content[cid++])
}
function cinS() {
    return content[cid++]
}

function cout(...args) {
    args.forEach((item) => {
        console.log(item);
    })
}