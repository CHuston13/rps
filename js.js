
function playerSelection(){
    let playerSelection=['Rock', 'Paper' , 'Scissors']
    return prompt='Do you choose rock paper or scissors'
}


function computerPlay(){
    let computerPlay=['Rock, Paper ,Scissors']
    return Math.floor(Math.random()*choices.lenth)}

    function playRound (playerSelection,computerPlay){
        if (playerSelection=== 'Rock' && computerPlay==='Scissors' ||
            (playerSelection==='Scissors' && computerPlay==='Paper'||
            (playerSelection==='Paper' && computerPlay==='Rock')))
            return 'Player Wins' + playerSelection  +"Beats"+ computerPlay
    }

    