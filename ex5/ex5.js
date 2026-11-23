let isPalindrome = text => {
    return text === text.split("").reverse().join("");
}

let inputPalindrome = prompt(`Nhập chuỗi cần kiểm tra`);
alert(isPalindrome(inputPalindrome));