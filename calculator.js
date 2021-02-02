
// Declaring a variable
let firstNumber = 2
let secondNumber = 5
let operation = "-"
/*
// if statment
if (operation == "*"){
    console.log(`The Operation is multiplication. *** ${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`)
} else if ( operation == "+"){
    console.log(`The Operation is addition. *** ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`)
} else if ( operation == "-"){
    console.log(`The Operation is subtraction. *** ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`)
} else if ( operation == "/"){
    console.log(`The Operation is division. *** ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`)
}
*/
let result;

let check = () =>{

    result = (operation == "/") ? firstNumber / secondNumber: (operation == "*") ? firstNumber * secondNumber : (operation == "-") ? firstNumber - secondNumber : (operation == "+") ? firstNumber + secondNumber : "Error"
}
check();

console.log(result)