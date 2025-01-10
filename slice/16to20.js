//Use the slice method to extract everything except the first 3 characters from the string "Programming".
str = "Programming"
str1 = str.slice(3)
console.log(str1)

//Use the slice method to extract the middle 3 characters from the string "abcdef".
str = "abcdef"
str1 = str.slice(1,4)
console.log(str1)

//How can you use slice to extract the first word from "Welcome to JavaScript" without knowing the exact indices?
str = "Welcome to JavaScript"

const spaceIndex = str.indexOf(' ');
str1 = str.slice(0, spaceIndex);
console.log(str1); 

//Use the slice method to create a new string that omits the first 2 and last 2 characters from "Hello, World!".
str = "Hello, World!"
str1 = str.slice(2,str.length-2)
console.log(str1)

//Extract the substring "charming" from "This is a charming story" using both positive and negative indices with slice.
str = "This is a charming story"
str1 = str.slice(10,-6)
console.log(str1)