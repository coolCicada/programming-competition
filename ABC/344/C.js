function main() {
    const N = cin();
    const nArr = new Array(N);
    for (let i = 0; i < N; i ++) {
        nArr[i] = cin();
    }

    const M = cin();
    const mArr = new Array(M);
    for (let i = 0; i < M; i ++) {
        mArr[i] = cin();
    }

    const L = cin();
    const LArr = new Array(L);
    for (let i = 0; i < L; i ++) {
        LArr[i] = cin();
    }
    const set = new Set();
    for (let i = 0; i < N; i ++) {
        for (let j = 0; j < M; j ++) {
            for (let z = 0; z < L; z ++) {
                set.add(nArr[i] + mArr[j] + LArr[z]);
            }
        }
    }

    const Q = cin();
    for (let i = 0; i < Q; i ++) {
        const curr = cin();
        if (set.has(curr)) {
            cout('Yes')
        } else {
            cout('No')
        }
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