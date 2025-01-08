// Random Integer in Range
function randomNum(min, max){
    num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

console.log(randomNum(1,100))