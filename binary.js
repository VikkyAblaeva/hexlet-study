//Бинарный поиск по книге Грокаем алгоритмы (Адитья Бхаргава)
const binary = (arr, num) => {
  let finish = arr.length - 1;
  let mid = 0;
  let i = 0;
  while (i <= finish) {
    mid = Math.floor((i + finish) / 2);
    if (arr[mid] === num) {
      console.log(i);
      return mid;
    }
    if (arr[mid] > num) {
      finish = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  console.log(i);
  return null;
};
console.log(binary([1, 6, 10, 15, 20, 21, 75, 100], 21)); // 4 5 (с 4-й попытки, 5-й элемент в массиве)
console.log(binary([1, 6, 10, 15, 20, 21, 75, 100], 6)); // 0 1 (с 0-й попытки, 1-й элемент в массиве)
console.log(binary([1, 6, 10, 15, 20, 21, 75, 100], 75)); // 6 6 (с 6-й попытки, 6-й элемент в массиве)
