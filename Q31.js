// All Elements Except First in Array

function arrElements(arr){
    if (arr.length > 1){
    arr1 = arr.slice(1)
    return arr1
    }
    return arr
}

const arr = [6,8,3,9,7]
console.log(arrElements(arr))