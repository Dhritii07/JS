// Generate Random Hexadecimal Color Code
function hexRandomNum(){
    const code = '#' + (Math.random()* 0xfffff * 1000000).toString(16); //converting to hexadecimal
    return code.slice(0, 7)
}

const randomColor = hexRandomNum();
console.log(randomColor)
