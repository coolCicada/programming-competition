function main() {
    let n = cin()
    while (n --) solve()
}

function solve() {
    const n = cin()
    const arr = new Array(10).fill(0)
    for (let i = 0; i < n; i ++) {
        const curr = cin() % 10
        if (arr[curr] < 3) {
            arr[curr] ++
        }
    }
    const list = []
    for (let i = 0; i < 10; i ++) {
        for (let j = 0; j < arr[i]; j ++) {
            list.push(i)
        }
    }

    for (let i = 0; i < list.length; i ++) {
        for (let j = i + 1; j < list.length; j ++) {
            for (let z = j + 1; z < list.length; z ++) {
                if ((list[i] + list[j] + list[z]) % 10 === 3) {
                    cout('YES')
                    return
                }
            }
        }
    }

    cout('NO')



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