const Furry = require('./furry.js');
const Coin = require('./coin.js');

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
      this.hideVisibleFurry();
      this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
  }
  showCoin(){
      this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
  startGame(){
    document.querySelector('#score div strong').innerText = this.score;
    this.showCoin();
    const self = this;
    this.idSetInterval = setInterval(function(){
      self.moveFurry();
    }, 250);
  }
  moveFurry(){
    if(this.furry.direction === 'right') {
        this.furry.x++;
    } else if (this.furry.direction === 'left'){
      this.furry.x--;
    } else if (this.furry.direction === 'up') {
      this.furry.y--;
    } else {
      this.furry.y++;
    }
    if (this.furry.x < 0 || this.furry.x  > 9 || this.furry.y < 0 || this.furry.y > 9){
      this.gameOver();
    } else {
      this.showFurry();
      this.checkCoinCollision();
    }
  }
  hideVisibleFurry(){
    let visFurry = document.querySelector('.furry');
    if (visFurry!= null) {
      visFurry.classList.remove('furry');
    }
  }

  turnFurry(event){
    switch (event.which) {
      case 37:
        this.furry.direction = 'left';
        break;
      case 38:
        this.furry.direction = 'up';
        break;
      case 39:
        this.furry.direction = 'right';
        break;
      case 40:
        this.furry.direction = 'down';
        break;
      }
  }

  checkCoinCollision(){
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
      this.score++;
      document.querySelector('#score div strong').innerText = this.score;
      this.coin = new Coin();
      this.showCoin();
    }
  }

  gameOver(){
      clearInterval(this.idSetInterval);
      this.hideVisibleFurry();
      let visibleCoin = document.querySelector('.coin');
      visibleCoin.classList.remove('coin');
      swal('game over!! you scored ' + this.score + ' points!');
      this.score = 0;
  }

};

module.exports = Game;
