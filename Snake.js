class Snake {
  constructor() {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.size = canvas.width / 80;
  }

  show() {
    ctx.fillStyle = 'rgb(255,255,255)';
	ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fill();
  }

  move() {
    this.x += (Math.random() - 0.5) * 5;
    this.y += (Math.random() - 0.5) * 5;
  }

}
