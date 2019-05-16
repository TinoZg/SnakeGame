class Snake {
  constructor() {
    this.size = canvas.width / 60;
    this.body = [new Position()]; 
  }

  getX(i = 0) {
    return this.body[i].getX();
  }

  getY(i = 0) {
    return this.body[i].getY();
  }

  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
    for (let i = 0; i < this.body.length; i++){
      ctx.fillRect(this.getX(i), this.getY(i), this.size, this.size);
    }
  }


  move(xSpeed, ySpeed) {
    this.body.unshift(new Position(this.body[0].x + xSpeed * this.size, this.body[0].y + ySpeed * this.size));
    this.tail = this.body[this.body.length - 1];
    this.body.pop();
  }

  check() {
    if (this.body[0].x > canvas.width - this.size || this.body[0].x < 0 || this.body[0].y > canvas.height - this.body[0].size || this.body[0].y < 0) {
      //console.log("GAMEOVER");
    }
  }

  eats(other){
    if(this.getX() === other.x && this.getY() === other.y) {
    this.body.push(this.tail);
    console.log(this.body,this.tail);
    return true;  
    }
  }
}
