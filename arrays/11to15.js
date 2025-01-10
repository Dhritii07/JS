//Use the slice method to create a new array with the last two elements removed from [1, 2, 3, 4, 5, 6].
arr = [1, 2, 3, 4, 5, 6]
arr1 = arr.slice(0,4)
console.log(arr1)

//How can you use slice to extract the first two elements and the last element from [9, 8, 7, 6, 5] into a new array?
arr = [9, 8, 7, 6, 5]
arr1 = arr.slice(0, 2).concat(arr.slice(-1))
console.log(arr1)

//Extract the subarray ['cat', 'dog'] from ['fish', 'cat', 'dog', 'bird'] using the slice method.
arr = ['fish', 'cat', 'dog', 'bird']
arr1 = arr.slice(1,3)
console.log(arr1)

//Use slice to create a subarray omitting the first and last elements from [1, 2, 3, 4, 5, 6].
arr = [1, 2, 3, 4, 5, 6]
arr1 = arr.slice(1, arr.length-1)
console.log(arr1)

//How can you use slice to extract every element except the last from [3, 6, 9, 12]?
arr = [3, 6, 9, 12]
arr1 = arr.slice(0,arr.length-1)
console.log(arr1)