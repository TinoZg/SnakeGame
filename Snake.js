class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = canvas.width / 80;
  }

  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
	  ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  move(xSpeed, ySpeed) {
    this.x += xSpeed * this.size;
    this.y += ySpeed * this.size;
  }

}
