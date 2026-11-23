// function isEven(number) {
//     if (number % 2 === 0) {
//         number = true;
//     } else {
//         number = false;
//     }
//     return number;
// }
// let inputNumber = +prompt("Nhập vào số nguyên bất kỳ");
// alert(isEven(inputNumber));

const isEven = number => number % 2 === 0;

alert(isEven(+prompt("Nhập một số nguyên bất kỳ:")));