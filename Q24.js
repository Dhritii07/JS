// Decapitalize First Letter of String

function deCaps(str){
    if (str.length === 0){
        return str
    }
    return str.charAt(0).toLowerCase() + str.slice(1)
}

const str = 'Shinchan'
const ans = deCaps(str)
console.log(ans)