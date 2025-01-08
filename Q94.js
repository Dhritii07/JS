//  Move Array Elements to End

function moveElements(arr, n) {
    return [...arr.slice(n), ...arr.slice(0, n)];
}

const arr = [1, 2, 3, 4, 5];
const n = 3;

console.log(moveElements(arr, n));  