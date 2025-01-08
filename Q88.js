// Find Median of Numbers in Array
function median(arr){
    arr.sort((a,b) => b-a)
    mid = Math.floor(arr.length / 2)
    if (arr.length % 2 !== 0){
    console.log(arr[mid])
    }
    else{
        const median = (arr[mid - 1] + arr[mid]) / 2
        console.log(median)
    }
}

arr = [6,3,2,1,9,8]
median(arr)