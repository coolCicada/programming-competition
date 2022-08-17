function Main (input) {
  const string = input.trim();
  const arr = string.split('\n');
  const [h, w] = arr.shift().split(' ').map((item) => Number(item));
  const arr1 = [];
  for (let i = 0; i < h; i++) {
    arr1.push(arr.shift().split(' ').map((item) => Number(item)));
  }
  
  const [h2, w2] = arr.shift().split(' ').map((item) => Number(item));
  const arr2 = [];
  for (let i = 0; i < h2; i++) {
    arr2.push(arr.shift().split(' ').map((item) => Number(item)));
  }
  for (let i = 0; i < 1 << h; i++) {
    for (let j = 0; j < 1 << w; j++) {

      const rows = [];
      const columns = [];
      for (let z = 0; z < h; z++) {
        if ((i & 1 << z) === 0) rows.push(z);
      }
      for (let z = 0; z < w; z++) {
        if ((j & 1 << z) === 0) columns.push(z);
      }

      if (rows.length !== h2 || columns.length !== w2) continue;
      let flag = true;
      const r = [];
      for (let z = 0; z < h2; z++) {
        const r1 = [];
        for (let y = 0; y < w2; y++) {
          r1.push(arr1[rows[z]][columns[y]]);
          if (arr2[z][y] !== arr1[rows[z]][columns[y]]) {
            flag = false;
            break;
          }
        }
        r.push(r1);
      }
      if (flag) return 'Yes';
    }
  }

  return 'No';
}
console.log(Main(require('fs').readFileSync('/dev/stdin','utf8')))