// Number to Array of Digits
function numToArr(num) {
    return Array.from(String(num), Number);
}

console.log(numToArr(12345))

//string(num) => to convert number to string
//Array.from() => to create array from string