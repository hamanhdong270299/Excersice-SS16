const arr1 = [1, 2, 3, 4, 5, 6]; // sum = 21
const arr2 = [10, 20, 30, 40, 50]; // sum = 150
const arr3 = [1, 3, 5, 7, 9]; // sum = 25

// function sumArray(numbers) {
//     return numbers.reduce(function (total, number) {
//         return total + number;
//     }, 0);
// }
// console.log(sumArray(arr1));
// console.log(sumArray(arr2));
// console.log(sumArray(arr3));

let sumArray = numbers => numbers.reduce((total, number) => total + number, 0);

console.log(sumArray(arr1));
console.log(sumArray(arr2));
console.log(sumArray(arr3));



