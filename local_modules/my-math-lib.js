function add (num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2
}

// export a number of functions to yhe module
module.exports = {
    add,
    sub,
    mul,
    div
}