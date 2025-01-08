// Remove Left Elements from Array

function removeLeft(arr, n){
    return arr.slice(n)
}

const arr = [2,3,5,7,9]
const ans = removeLeft(arr, 1)
console.log(ans)