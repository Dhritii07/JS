// Execute Function for Array in Reverse Order
function reverse(arr, func){
    revArr =[]
    for(let i = arr.length - 1; i>=0; i--){
        func(arr[i])
}
}

const arr = [10, 20, 30, 40, 50];

reverse(arr, console.log);