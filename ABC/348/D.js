function main() {
    const [h, w] = cin(2);
    const arr = new Array(h + 1).fill(0);
    let x, y
    let endX, endY
    for (let i = 1; i <= h; i ++) {
        arr[i] = ' ' + cinS();
        for (let j = 1; j <= w; j ++) {
            if (arr[i][j] === 'S') {
                x = i;
                y = j;
            }
            if (arr[i][j] === 'T') {
                endX = i;
                endY = j;
            }
        }
    }
    const n = cin();
    const mp = new Map();
    for (let i = 0; i < n; i ++) {
        const [r, c, e] = cin(3);
        mp.set(r * 1000 + c, e)
    }
    const dis = new Array(h + 1).fill(0).map(() => new Array(w + 1).fill(-1));
    const vis = new Array(h + 1).fill(0).map(() => new Array(w + 1).fill(false))
    const heap = new BinaryHeap();
    const firtD = mp.get(x * 1000 + y) || 0
    heap.push({ key: -firtD,  val: [x, y] });
    while (heap.size()) {
        const t = heap.pop();
        const [x, y] = t.val;
        if (vis[x][y]) continue;
        if (arr[x][y] === '#') continue;
        dis[x][y] = -t.key;
        vis[x][y] = true;
        if (-t.key === 0) continue
        const dx = [0, 1, 0, -1]
        const dy = [1, 0, -1, 0]
        for (let i = 0; i < 4; i ++) {
            const nx = dx[i] + x
            const ny = dy[i] + y
            if (nx >= 1 && nx <= h && ny >= 1 && ny <= w) {
                dis[nx][ny] = Math.max(dis[nx][ny], -t.key - 1, mp.get(nx * 1000 + ny) || 0);
                heap.push({ key: -dis[nx][ny], val: [nx, ny]})
            }
        }
    }
    // for (let i = 1; i < dis.length; i ++) {
    //     cout(...dis[i].slice(1))
    // }
    if (dis[endX][endY] !== -1) {
        cout('Yes')
    } else {
        cout('No')
    }
}

class BinaryHeap {
    constructor() {
        this.heap = [null];
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    top() {
        return this.heap[1];
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    size() {
        return this.heap.length - 1;
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    pop() {
        let ans = this.heap[1];
        this.swap(1, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown(1);
        return ans;
    }

    heapifyUp(p) {
        while (p > 1) {
            let fa = p >> 1;
            if (this.heap[p].key < this.heap[fa].key) {
                this.swap(p, fa);
                p = fa;
            } else break;
        }
    }

    heapifyDown(p) {
        let child = p * 2;
        while (child < this.heap.length) {
            const otherChild = p * 2 + 1;
            if (otherChild < this.heap.length && this.heap[child].key > this.heap[otherChild].key) {
                child = otherChild;
            }
            if (this.heap[child].key < this.heap[p].key) {
                this.swap(p, child);
                p = child;
                child = p * 2;
            } else break;
        }
    }
}

let inputString = '', content = null, cid = 0;
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (inputStdin) => {inputString += inputStdin;});
process.stdin.on('end', (_) => {content=inputString.trim().split(/\s+/), cid=0;main();})
function cin(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = Number(content[cid++]); } return arr; } return Number(content[cid++]) }
function cinS(n) { if (n) { const arr = new Array(n); for (let i = 0; i < n; i ++) { arr[i] = content[cid++]; } return arr; } return content[cid++] }
function cout(...args) {process.stdout.write(`${args.join(' ')}\n`)}