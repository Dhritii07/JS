// Extract the substring "Java" from "JavaScript is awesome!" using the slice method.
str = "JavaScript is awesome!"
str1 = str.slice(0,4)
console.log(str1)

//Use the slice method to extract the characters from index 2 to 5 from the string "Python".
str = "Python"
str1 = str.slice(2,6)
console.log(str1)

//Remove the first and last characters from the string "Amazing!" using slice.
str = "Amazing!"
str1 = str.slice(1,str.length-1)
console.log(str1)

//Extract the substring "is fun" from "Learning to code is fun!" using slice.
str = "Learning to code is fun!"
str1 = str.slice(-7,-1)
console.log(str1)

//How can you extract the substring "code" from "Let's code something!" using a single negative index in slice?
str = "Let's code something!"
str1 = str.slice(-15,-11)
console.log(str1)
