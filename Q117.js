// Truncate String to Length

function truncate(str, n){
    if (str.length > n){
        let str1 = str.slice(0,n)
        return str1 + "..."
    }
    return str
}

console.log(truncate('helloo', 2))