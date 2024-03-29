function main() {
    const n = cin(), q = cin(), k = cin();
    const arr = new Array(n + 1);
    for (let i = 1; i <= n; i ++) arr[i] = cin();

    for (let i = 0; i < q; i ++) {
        const l = cin(), r = cin();
        cout(2 * (arr[r] - arr[l] - 1) - 2 * (r - l - 1) + arr[l] - 1 + k - arr[r]);
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
    console.log(args.join(' '));
}