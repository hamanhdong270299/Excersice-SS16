const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

let minArr1 = arr1.reduce((firstNumber, secondNumber) => {
    return firstNumber < secondNumber ? firstNumber : secondNumber;
});
console.log(`Giá trị nhỏ nhất của mảng 1: ${minArr1}`);

let min2 = arr2.reduce((firstNumber, secondNumber) => {
    return firstNumber < secondNumber ? firstNumber : secondNumber;
});
console.log(`Giá trị nhỏ nhất của mảng 2: ${min2}`);

let min3 = arr3.reduce((firstNumber, secondNumber) => {
    return firstNumber < secondNumber ? firstNumber : secondNumber;
}, Infinity);
console.log(`Giá trị nhỏ nhất của mảng 3: ${min3}`);


let min4 = arr4.reduce((firstNumber, secondNumber) => {
    return firstNumber < secondNumber ? firstNumber : secondNumber;
})
console.log(`Giá trị nhỏ nhất của mảng 4: ${min4}`);
