// Extract the substring "learn" from "Let's learn JavaScript!" using negative indices with the slice method.
str = "Let's learn JavaScript!"
str1 = str.slice(-17,-12)
console.log(str1)

//6. How can you use slice to extract the first word from a string that contains multiple words, such as "Front-End Development"?

str = "Front-End Development"
str1 = str.slice(0,5)
console.log(str1)

// 7. Use slice to get the substring from index 3 to the end of the string "abcdef".
str = "Front-End Development"
str1 = str.slice(0,5)
console.log(str1)

//8. Extract the substring "quick brown" from "The quick brown fox" using slice.
str = "The quick brown fox"
str1 = str.slice(4,15)
console.log(str1)

//9. How can you extract the first three characters from the string "JavaScript" using slice?
str = "JavaScript"
str1 = str.slice(0,3)
console.log(str1)

//10. Use slice to remove the last character from the string "Hello!" and print the resulting string.
str = "Hello!"
str1 = str.slice(0,str.length-1)
console.log(str1)

