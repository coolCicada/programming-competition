function sort(arr, l, r) {
  if (l >= r) return;
  let mid = (l + r) >> 1;
  sort(arr, l, mid);
  sort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  const temp = new Array(r - l + 1);
  let i = l, j = mid + 1;
  for (let k = 0; k < temp.length; k++) {
      if (j > r || (i <= mid && arr[i] <= arr[j])) {
          temp[k] = arr[i++];
      } else {
          temp[k] = arr[j++];
      }
  }
  for (let k = 0; k < temp.length; k++) {
      arr[l + k] = temp[k];
  }
}