//  Check All Elements Equal in Array
function checkEqual(arr){
    for (let i = 0; i<arr.length;i++){
        if (arr[i] !== arr[0]){
            return 'not equal'
        }
    }
    return 'equal'
}

const arr = [0,9,8]
console.log(checkEqual(arr))

const arr1 = [7,7,7]
console.log(checkEqual(arr1))