
const calculateAverage = ():number => {

let numbers:number[] = [2,4,5,8,6];

let sumOfNumbers = numbers.reduce((prev: number, curr:number) => prev + curr, 0)

return sumOfNumbers / numbers.length;
 
}


console.log(calculateAverage());