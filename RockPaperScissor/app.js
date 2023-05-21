const choices = ["rock","paper","scissor",]
let userScore = 0
let computerScore = 0

// let userChoosen = prompt("Choose from Rock,Paper or Scissor").toLowerCase()


 

// console.log(computerChoice)

const playGame = (userChoice,computerChoice)=>{
    if(userChoice === computerChoice){
        console.log("It's a Draw!")
    }
    
    else if(( (userChoice === 'rock') && (computerChoice==='scissor') || (userChoice === 'paper') && (computerChoice==='rock') || (userChoice === 'scissor') && (computerChoice==='paper') )){
        userScore++
        console.log(`User's: ${userChoice} beaten Computer's: ${computerChoice}`)
    }
    
    else{
        console.log(`Computer's: ${computerChoice} beaten User's: ${userChoice}`)
        computerScore++
    }
}

// console.log(playGame(userChoosen,computerChoosen))

for(let round = 1; round<6; round++){
    let userChoosen = prompt("Choose from Rock,Paper or Scissor").toLowerCase()

    const randomChoice = ()=>{
        return Math.floor(Math.random()*3)
    }
    const random = randomChoice()
    
    const computerChoosen = choices[random]

    playGame(userChoosen,computerChoosen)

    if(round===5){
        if(userScore === computerScore){
            console.log(`It's a Tie between the Human and Ai and the score is ${computerScore} - ${userScore}`)
        }
        else if(userScore>computerScore){
            console.log(`User won by ${userScore} - ${computerScore}`)
        }
        else{
            console.log(`Ai won by ${computerScore} - ${userScore}`)
        }
    }
}

