class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = canvas.width / 60;
  }

  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(Math.floor(this.x / 10) * 10, Math.floor(this.y / 10) * 10, this.size, this.size);
  }


  move(xSpeed, ySpeed) {
    this.x += xSpeed * this.size;
    this.y += ySpeed * this.size;
  }

  check() {
    if (this.x > canvas.width - this.size || this.x < 0 || this.y > canvas.height - this.size || this.y < 0) {
      console.log("GAMEOVER");
    }
  }

  eats(other){
    if(this.x === other.x & this.y === other.y) {

    }
  }

}
