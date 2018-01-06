import swal from 'sweetalert';
const Game = require('./game.js');


document.addEventListener('DOMContentLoaded', function(){

  const start = document.querySelector('#start');
  start.addEventListener('click', startGame);

  function startGame(event) {
    document.addEventListener('keydown', function(event){
        game.turnFurry(event);
    });
    const game = new Game();
    game.startGame();
  };

})
