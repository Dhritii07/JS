// Randomize Array Values

function randomize(arr){
    return arr.sort(() => Math.random() - 0.5)
}
const arr = [3,4,6,7,8,10]
console.log(randomize(arr))