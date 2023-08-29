function getArrayParams(...arr) {
let min = Infinity;
let max = -Infinity;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
if (arr[i] > max) {
  max = arr[i];
}
if (arr[i] < min) {
  min = arr[i];
}
sum += arr[i];
}
const avg = sum / arr.length;

  return { min: min, max: max, avg: parseFloat(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
if (arr.length === 0) {
  return 0;
}
return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0) {
  return 0;
}
const max = Math.max(...arr);
const min = Math.min(...arr);
return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

let sumEvenElement = 0;
let sumOddElement = 0;

for (let i = 0; i < arr.length; i++) {
const num = arr[i];
if (num % 2 === 0) {
  sumEvenElement += num;
} else {
  sumOddElement += num;
}
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
if (arr.length === 0) {
  return 0;
}

let sumEvenElement = 0;
let countEvenElement = 0;

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (num % 2 === 0) {
    sumEvenElement += num;
    countEvenElement ++;
  }
}
  if (countEvenElement === 0) {
    return 0;
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let makeWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++) {
  const result = func(...arrOfArr[i]);
if (result > makeWorkerResult) {
  makeWorkerResult = result;
  }
}
return makeWorkerResult;
}
