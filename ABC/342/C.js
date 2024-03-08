function solve() {
    const N = cin();
    const S = cinS().split('');
    const Q = cin();

    const arr = new Array(26);
    for (let i = 0; i < 26; i ++) {
        arr[i] = String.fromCharCode(i + 'a'.charCodeAt());
    }

    for (let i = 0; i < Q; i ++) {
        let a = cinS(), b = cinS();
        for (let j = 0; j < 26; j ++) {
            if (arr[j] === a) {
                arr[j] = b
            }
        }
    }

    for (let i = 0; i < N; i ++) {
        S[i] = arr[S[i].charCodeAt() - 'a'.charCodeAt()]
    }

    cout(S.join(''))
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '', content = null, cid = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    content=inputString.split(/ |\n/), cid=0;
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