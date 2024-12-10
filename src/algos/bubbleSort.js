const bubbleSort = (arr) => {
  let swapped = 0;
  let logs = [];
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    swapped = 0;
    for (let j = 0; j < n - i - 1; j++) {
      let log = [j, j + 1, false];
      if (arr[j] > arr[j + 1]) {
        log[2] = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = 1;
      }
      logs.push(log);
    }
    if (!swapped) break;
  }
  return logs;
};

export default bubbleSort;
