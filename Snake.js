class Snake {
  constructor() {
    this.size = canvas.width / 60;
    this.body = [new Position()]; 
  }
  
  getX(i = 0) {
    return this.body[Math.min(i, this.body.length-1)].getX();
  }

  getY(i = 0) {
    return this.body[Math.min(i, this.body.length-1)].getY();
  }
  //render snake on the screen
  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
    for (let i = 0; i < this.body.length; i++){
      ctx.fillRect(this.getX(i)+1, this.getY(i)+1, this.size-1, this.size-1);
    }
  }

  //move whole snake
  move(xSpeed, ySpeed) {
    this.body.unshift(new Position(this.body[0].x + xSpeed * this.size, this.body[0].y + ySpeed * this.size));
    this.tail = this.body[this.body.length - 1];
    this.body.pop();
  }
  //check if snake is on the grid
  check() {
    if (this.body[0].x > canvas.width - this.size || this.body[0].x < 0 || this.body[0].y > canvas.height - this.size || this.body[0].y < 0) {
      return true;      
    } else {
      return false;
    }
  }

  //check if snake hits itself
  //ovo ne radi dobro
  hit() {
    for(let i = 1; i < this.body.length; i++) {
      if((this.body[0].x === this.body[i].x) && (this.body[0].y === this.body[i].y)) {
        return true;  
      }
    } return false;
  }
  //return whether snake eats food or not
  eats(other){
    if(this.getX() === other.x && this.getY() === other.y) {
    this.body.push(this.tail);
    return true;  
    }
  }
}
