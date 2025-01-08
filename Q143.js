// Sort String Alphabetically
function sortStr(str){
    str1 = str.toLowerCase()
    return str1.split('').sort().join('')
}

let str = 'javaScript'
console.log(sortStr(str))