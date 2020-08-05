function newGame() {
  score = [0,0];
  activePlayer = 0;
  currentScores = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#name-0').textContent = 'Player1';
  document.querySelector('#name-1').textContent = 'Player2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

function newPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  currentScores = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

newGame();

document.querySelector('.btn-hold').addEventListener('click', function() {
    score[activePlayer] += currentScores;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]
    if (score[activePlayer] >= 10) {
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');

    }
    else {
      newPlayer();
    }
});

document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6 + 1);
    var diceImg = document.querySelector('.dice');
    diceImg.style.display = 'block';
    diceImg.src = 'dice-' + dice + '.png';
    if (dice !== 1) {
      currentScores += dice;
      document.querySelector('#current-' + activePlayer).textContent = currentScores;
    }
    else {
      newPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);
