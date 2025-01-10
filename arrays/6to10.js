//How can you use slice to copy the entire array [10, 20, 30, 40]?
arr = [10, 20, 30, 40]
arr1 = arr.slice(0)
console.log(arr1)

//Use the slice method to extract the middle element from the array [1, 2, 3, 4, 5].
arr = [1, 2, 3, 4, 5]
arr1 = arr.slice(2,3)
console.log(arr1)

//Extract the last three elements from the array [100, 200, 300, 400, 500] using negative indices with slice.
arr = [100, 200, 300, 400, 500]
arr1 = arr.slice(-3)
console.log(arr1)

//Use slice to get a new array omitting the first two elements from [5, 10, 15, 20, 25].
arr = [5, 10, 15, 20, 25]
arr1 = arr.slice(2)
console.log(arr1)

//How can you extract a subarray [40, 50, 60] from [10, 20, 30, 40, 50, 60] using slice?
arr = [10, 20, 30, 40, 50, 60]
arr1 = arr.slice(-3)
console.log(arr1)

