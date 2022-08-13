function quickSort(arr, l, r) {
  if (l >= r) return;
  const pivot = partition(arr, l, r);
  quickSort(arr, l, pivot);
  quickSort(arr, pivot + 1, r);
}

function partition(arr, l, r) {
  const pivot = l + (Math.random() * (r - l + 1) | 0);
  const pivotVal = arr[pivot];
  while (l <= r) {
      while (arr[l] < pivotVal) l++;
      while (arr[r] > pivotVal) r--;
      if (l === r) break;
      if (l < r) {
          let temp = arr[l];
          arr[l] = arr[r];
          arr[r] = temp;
          l++; r--;
      }
  }
  return r;
}