//How can you use slice to reverse a string "reverse" by slicing from the end to the beginning?
str = "reverse"
str1 = ""
for (let i = str.length - 1; i >= 0; i--) {
    str1 += str.slice(i, i + 1);
  }
console.log(str1)

//Use the slice method to extract the second half of the string "Fantastic".
str = "Fantastic"
str1 = str.slice(4)
console.log(str1)

//Extract the substring "weather" from "The weather is lovely" using the slice method with negative indices.
str = "The weather is lovely"
str1 = str.slice(-17,-10)
console.log(str1)

//How can you use slice to get the last word of the string "It is a bright day outside"?
str = "It is a bright day outside"
str1 = str.slice(-7)
console.log(str1)

//Use the slice method to extract every character except the first and last from "Surprise!"
str = "Surprise!"
str1 = str.slice(1,str.length-1)
console.log(str1)