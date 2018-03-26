var score, roundScore, activePlayer, dice, gamePlaying = true ;
init();
dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//doument.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2. Display the Result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Updating the round score if the rolled number was not a 1
        if (dice !== 1) {
            //Add dice value to roundScore
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none';
        }

    }
   });
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        //Add current score to global score
        score[activePlayer] += roundScore;
        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        // check wheather player win or not
        if (score[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer()
{
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
document.querySelector('.btn-new').addEventListener('click', init);
function init()
{
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('Winner');
}