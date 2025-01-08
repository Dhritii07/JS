// Check y/yes or n/no in String
function YesNo(str){
    str1 = str.toLowerCase()
    if (str1 == 'y' || str1 == 'yes'){
        return true
    }
    else if (str1 == 'n' || str1 == 'no'){
        return false
    }

    return true
}

let str = 'y'
console.log(YesNo(str))
