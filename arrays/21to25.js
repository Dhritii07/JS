//Extract the elements from index 1 to the second last index from [50, 60, 70, 80, 90] using slice.
arr = [50, 60, 70, 80, 90]
arr1 = arr.slice(1,4)
console.log(arr1)

//Use the slice method to get a subarray omitting the first and last two elements from [5, 10, 15, 20, 25, 30].
arr = [5, 10, 15, 20, 25, 30]
arr1 = arr.slice(1,structuredClone.length-2)
console.log(arr1)

//How can you use slice to extract the first and last elements of [7, 14, 21, 28, 35] into a new array?
arr = [7, 14, 21, 28, 35]
arr1 = arr.slice(0,1).concat(arr.slice(-1))
console.log(arr1)

//Use slice to create a new array containing the elements from index 2 to 4 from ['a', 'b', 'c', 'd', 'e'].
arr = ['a', 'b', 'c', 'd', 'e']
arr1 = arr.slice(2)
console.log(arr1)

//How can you use slice to create a subarray of the first half of [1, 3, 5, 7, 9, 11, 13]?
arr = [1, 3, 5, 7, 9, 11, 13]
arr1 = arr.slice(0,4)
console.log(arr1)
