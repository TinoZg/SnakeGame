class Snake {
  constructor() {
    this.size = canvas.width / 60;
    this.body = [new Position()];
  }

  getX() {
    return this.body[0].getX();
  }

  getY() {
    return this.body[0].getY();
  }

  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(this.getX(), this.getY(), this.size, this.size);
    console.log(`${this.getX()}`, `${this.getY()}`);
  }


  move(xSpeed, ySpeed) {
    this.body.unshift(new Position(this.body[0].x + xSpeed * this.size, this.body[0].y + ySpeed * this.size));
    this.body.pop();
  }

  check() {
    if (this.body[0].x > canvas.width - this.size || this.body[0].x < 0 || this.body[0].y > canvas.height - this.body[0].size || this.body[0].y < 0) {
      //console.log("GAMEOVER");
    }
  }

  eats(other){
    if(this.getX() === other.x && this.getY() === other.y) {
    //console.log("HIT");
    return true;  
    }
  }
}
