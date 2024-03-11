function main() {
    const arr = new Array(4).fill(null).map(() => [])
    for (let i = 0; i < 4; i ++) {
        arr[i].push(cin())
        arr[i].push(cin())
    }

    const ax = arr[0][0], ay = arr[0][1],
    bx = arr[1][0], by = arr[1][1],
    cx = arr[2][0], cy = arr[2][1],
    dx = arr[3][0], dy = arr[3][1];
    {
        const calc = calculateLineEquationCoefficients(ax, ay, cx, cy);
        if (calc(bx, by) * calc(dx, dy) >= 0) {
            cout('No')
            return
        }
    }

    {
        const calc = calculateLineEquationCoefficients(bx, by, dx, dy);
        if (calc(ax, ay) * calc(cx, cy) >= 0) {
            cout('No')
            return
        }
    }
    cout('Yes')
}

function calculateLineEquationCoefficients(x1, y1, x2, y2) {
    const a = y2 - y1;
    const b = x1 - x2;
    const c = x2 * y1 - x1 * y2;

    return (x, y) => {
        return a * x + b * y + c;
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