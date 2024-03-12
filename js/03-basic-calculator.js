// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation){
    if (operation==='-' || operation==='subtract'){return x-y}
    else if (operation==='*' || operation==='multiply'){return x*y}
    else if (operation==='/' || operation==='divide'){return x/y}
    else if (operation==='+' || operation==='add'){return x+y}
}

let options=['+', '-', '*', '/', 'add', 'subtract', 'multiply', 'divide'];
let firstNumber;
let secondNumber;
let operation;

// COLLECT FIRST NUMBER FROM USER
while(true){
    firstNumber=parseFloat(prompt('Enter your first number') );
    if (!isNaN(firstNumber))break;
    else {alert ('Error, not a number')}
}

// COLLECT SECOND NUMBER FROM USER
while(true){
    secondNumber=parseFloat(prompt('Enter your second number') );
    if (!isNaN(secondNumber))break;
    else {alert ('Error, not a number')}
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
while (true){
    operation=prompt('Enter your operation: +,-,*,/ ');
    if (options.includes(operation)){ break}
    else {alert('Enter your operation: +,-,*,/ or add, subtract, multiply, or divide')}
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(`${firstNumber} ${operation} ${secondNumber} = ${calculate(firstNumber, secondNumber, operation)}`);