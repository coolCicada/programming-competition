let dijkstra = () => {
    let dist = [];
    let v = []
    for (let i = 1; i <= n; i++) {
        dist[i] = 1e9;
        v[i] = false;
    }
    dist[1] = 0;
    let q = new BinaryHeap();
    q.push({
        key: 0,
        vertex: 1
    });
    while (!q.isEmpty()) {
        let x = q.pop().vertex;
        if (v[x]) continue;
        v[x] = true;
        for (let i = 0; i < ver[x].length; i++) {
            let y = ver[x][i];
            let z = edge[x][i];
            if (dist[y] > dist[x] + z) {
                dist[y] = dist[x] + z;
                q.push({
                    key: dist[y],
                    vertex: y
                });
            }
        }
    }
    if (dist[n] === 1e9) return -1;
    return dist[n];
}