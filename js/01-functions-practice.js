// Practice with Functions (5 points)

//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
const halfNumber = (num) => console.log(`Half of ${num} is ${num/2}.`)
halfNumber(5)

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = (num) => console.log(`The result of squaring the number ${num} is ${num **2}.`)
squareNumber(3)

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
const percentOf =(num1, num2) => console.log(`${num1} is ${num1*100/num2}% of ${num2}.`)
percentOf(2, 4)

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
const findModulus = (num1, num2) => {
    if (num1>num2){console.log(`${num1%num2} is the modulus of ${num1} and ${num2}.`)}
    else {console.log(`${num2%num1} is the modulus of ${num1} and ${num2}.`)}
}
findModulus(4, 10)
