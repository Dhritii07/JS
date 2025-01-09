// Remove Right Elements from Arra
function removeRight(arr, n){
    return arr.slice(0, arr.length-n)
}

const arr = [2,3,5,7,9]
const ans = removeRight(arr, 1)
console.log(ans)