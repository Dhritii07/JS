// Array of n Random Integers in Range

function randomArr(n, min, max){
    const randomNums = []

    for(let i = 0; i<n; i++){
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
        randomNums.push(randomNum)
    }
    return randomNums
}

let n = 3
let min = 50
let max = 100
console.log(randomArr(n, min, max))