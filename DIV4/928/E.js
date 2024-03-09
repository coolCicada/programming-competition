function solve() {
    let n = cin();
    while (n --) main()
}
// 1 - 20
// 1 3 5 7 9 11 13 15 17 19
// 2 6 10 14 18
// 
// 4 12 20
// 
// 
// 
// 8
// ...
// 16
function main() {
    let n = cin(), p = cin();
    let cnt = 0
    let i = 0
    while (n) {
        if (cnt + Math.floor((n - 2 ** i) / 2 ** (i + 1)) + 1 >= p) {
            cout(2 ** (i + 1) * (p - cnt - 1) + 2 ** i);
            break;
        }
        cnt += Math.floor((n - 2 ** i) / 2 ** (i + 1)) + 1;
        i ++
    }

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