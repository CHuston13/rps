
const buttons = document.querySelectorAll('.rps')



function computerPlay(){
    let computerPlay=['Rock, Paper ,Scissors']
    return Math.floor(Math.random()*choices.lenth)}

    function playRound (computerPlay){
        if (playerSelection=== 'Rock' && computerPlay==='Scissors' ||
            (playerSelection==='Scissors' && computerPlay==='Paper'||
            (playerSelection==='Paper' && computerPlay==='Rock')))
    
            return 'Player Wins' + playerSelection  +"Beats"+ computerPlay
            else return 'you lose'
    }


