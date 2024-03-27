function main() {
    let t = cin();
    while (t --) solve() 
}

function solve() {
    const str = cinS();
    const L = str.length;
    const a = new Array(L + 1)
        .fill(0)
        .map(
            () => new Array(2)
                .fill(0)
        )

    const b = new Array(L + 1)
        .fill(0)
        .map(() => new Array(2).fill(0))
    for (let i = 1; i <= L; i ++) {
        a[i][0] = a[i - 1][0]
        a[i][1] = a[i - 1][1]
        if (i % 2 !== 0) {
            if (str[i - 1] === '?') {
                a[i][1] ++
            }
            if (str[i - 1] === '1') {
                a[i][1] ++
                a[i][0] ++
            }
        }
    }
    for (let i = 1; i <= L; i ++) {
        b[i][0] = b[i - 1][0]
        b[i][1] = b[i - 1][1]
        if (i % 2 === 0) {
            if (str[i - 1] === '?') {
                b[i][1] ++
            }
            if (str[i - 1] === '1') {
                b[i][1] ++
                b[i][0] ++
            }
        }
    }

    for (let i = 1; i <= L; i ++) {
        if (a[i][1] > b[i][0] + Math.ceil((10 - i) / 2)) {
            return cout(i)
        }
        if (b[i][1] > a[i][0] + Math.floor((10 - i) / 2)) {
            return cout(i)
        }
    }
    cout(10)
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
    console.log(args.join(' '));
}