function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
      if (num < min) min = num;
      if (num > max) max = num;
      sum += num;
  }

  let avg = +(sum / arr.length).toFixed(2);
  return { min, max, avg };

}

function summElementsWorker(...arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

    for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
    }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

    for (let arr of arrOfArr) {
        const result = func(...arr);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
