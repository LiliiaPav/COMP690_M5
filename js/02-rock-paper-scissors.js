// The Rock, Paper, Scissors Game (20 points)

// User makes a choice.
function userChoice(){
    let userInput;
    while (true){
        userInput=prompt('Rock (1), paper (2) or scissors (3)').toLowerCase() ;
        if (['scissors', 'rock', 'paper', '3', '2', '1'].includes(userInput)){ break}
    }
    if (userInput==='1'){userInput='rock'}
    else if (userInput==='2'){userInput='paper'}
    else if (userInput==='3'){userInput='scissors'}
    return userInput;
}

let options =['scissors', 'rock', 'paper']
let user = userChoice();
document.write(`User's choice is ${user}  `)

// Computer makes a choice.
let helper = Math.round(Math.random()*2)//0, 1, 2
let computer = options[helper]; 
document.write(`Computer’s choice is ${computer}`)

// Rock(1) destroys scissors.
// Scissors(0) cut paper.
// Paper(2) covers rock.

if ((user==='rock' && computer==='scissors') || (user==='scissors' && computer==='paper') || (user==='paper' && computer==='rock'))
    {alert('User wins!')}
else if (user===computer) {alert('Tie!')}
else {alert('Computer wins!')}