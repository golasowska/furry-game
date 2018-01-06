document.addEventListener('DOMContentLoaded', function(){

  class Furry {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.direction = 'right';
    }
  };

  class Coin {
    constructor(){
      this.x = Math.floor(Math.random() * 10);
      this.y = Math.floor(Math.random() * 10);
    }
  };

  class Game {
    constructor(){
      this.board = document.querySelectorAll('#board div');
      this.furry = new Furry();
      this.coin = new Coin();
      this.score = 0;
      this.index = function(x,y) {
        return x + (y * 10);
      };
    }
    showFurry() {
      this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    }
    showCoin(){
      this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
    startGame(){
      this.idSetInterval = setInterval(function(){
        console.log('hurra z setIntervala');
      }, 250);
    };
  };

  const game = new Game();
  game.showFurry();
  game.showCoin();
  // game.startGame();

  console.log('gejm', game );









})
