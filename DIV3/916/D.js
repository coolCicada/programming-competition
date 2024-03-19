
function main() {
    let t = cin()
    while (t --) solve()
}

function solve() {
    let n = cin();
    const arrA = new Array(n), arrB = new Array(n), arrC = new Array(n);
    for (let i = 0; i < n; i ++) {
        arrA[i] = cin() 
    }
    for (let i = 0; i < n; i ++) {
        arrB[i] = cin();
    }
    for (let i = 0; i < n; i ++) {
        arrC[i] = cin();
    }
    const sortA = new Array(n), sortB = new Array(n), sortC = new Array(n);
    for (let i = 0; i < n; i ++) {
        sortA[i] = i
        sortB[i] = i
        sortC[i] = i
    }
    sortA.sort((x, y) => arrA[y] - arrA[x])
    sortB.sort((x, y) => arrB[y] - arrB[x])
    sortC.sort((x, y) => arrC[y] - arrC[x]);

    const selectA = sortA.slice(0, 3);
    const selectB = sortB.slice(0, 3);
    const selectC = sortC.slice(0, 3);
    // cout(selectA, selectB, selectC)

    let r = 0
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j ++) {
            for (let z = 0; z < 3; z ++) {
                if (selectA[i] !== selectB[j] && selectA[i] !== selectC[z] && selectB[j] !== selectC[z]) {
                    r = Math.max(r, arrA[selectA[i]] + arrB[selectB[j]] + arrC[selectC[z]])
                }
            }
        }
    }

    cout(r);
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