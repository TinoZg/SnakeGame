class Bubble {
  constructor() {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.radius = 30;
  }

  show() {
    ctx.beginPath();
    // ctx.fillStyle = 'rgb(255,255,255)';
    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    // ctx.fill();
  }

  move() {
    this.x += (Math.random() - 0.5) * 5;
    this.y += (Math.random() - 0.5) * 5;
  }

}