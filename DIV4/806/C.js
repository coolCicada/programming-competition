function solve() {
    let n = cin()
    while (n --) main()
}

function main() {
    const n = cin();
    const arr = new Array(n)
    for (let i = 0; i < n; i ++) {
        arr[i] = cin();
    }

    for (let i = 0; i < n; i ++) {
        const a = cin(), s = cinS();
        for (let j = a - 1; j >= 0; j --) {
            if (s[j] === 'U') {
                arr[i] --
            } else {
                arr[i] ++
            }
            arr[i] = (arr[i] + 10) % 10
        }
    }
    cout(arr.join(' '))
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