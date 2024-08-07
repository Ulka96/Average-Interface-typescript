"use strict";
const calculateAverage = () => {
    let numbers = [2, 4, 5, 8, 6];
    let sumOfNumbers = numbers.reduce((prev, curr) => prev + curr, 0);
    return sumOfNumbers / numbers.length;
};
console.log(calculateAverage());
