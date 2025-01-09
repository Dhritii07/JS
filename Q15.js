// Min-Max Value of Array with Function

function minMax(arr, fn) {
    let Minn = Math.min(...arr.map(fn))
    let Maxx = Math.max(...arr.map(fn))
    
    return { min: Minn , max: Maxx };
}

const nums = [10, 20, 30, 40, 50];
const result = minMax(nums, num => num ); 
console.log(result);  
