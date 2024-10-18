"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr.push(root1, root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = (percent / 100) / 12;
  const loanBody = amount - contribution;

  if (loanBody === 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  const totalAmount = (monthlyPayment * countMonths).toFixed(2);

  return Number(totalAmount);
}