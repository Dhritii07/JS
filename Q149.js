// Random Element from Array

function randomNum(arr){
    const randomPos = Math.floor(Math.random() * arr.length);
    return arr[randomPos]
}

const arr = [7,9,8,6,5,90]
console.log(randomNum(arr))