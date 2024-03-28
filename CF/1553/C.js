function main() {
    let t = cin();
    while (t --) solve()
}

function solve() {
    const str = cinS();
    let res = 10
    let a = 0, b = 0
    for (let i = 0; i < 10; i ++) {
        if (i % 2 === 0) {
            a += str[i] === '?' || str[i] === '1'
        } else {
            b += str[i] === '1'
        }
        if (a > b) {
            if (a > b + Math.ceil((9 - i) / 2)) {
                res = i + 1
                break;
            }
        } else {
            if (b > a + Math.floor((9 - i) / 2)) {
                res = i + 1;
                break;
            }
        }
    }
    a = 0, b = 0
    for (let i = 0; i < 10; i ++) {
        if (i % 2 === 0) {
            a += str[i] === '1'
        } else {
            b += str[i] === '1' || str[i] === '?'
        }
        if (a > b) {
            if (a > b + Math.ceil((9 - i) / 2)) {
                res = Math.min(res, i + 1)
                break;
            }
        } else {
            if (b > a + Math.floor((9 - i) / 2)) {
                res = Math.min(res, i + 1)
                break;
            }
        }
    }
    cout(res)
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