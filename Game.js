const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');
let xSpeed = 0;
let ySpeed = 0;

let snake;

function setup() {
  snake = new Snake();
  requestAnimationFrame(draw);
}


function draw() {
  //set background to black
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake.show();
  snake.move(xSpeed, ySpeed);
  requestAnimationFrame(draw);
}

setup();

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    console.log("LEFT");
    xSpeed = -1;
    ySpeed = 0;
  }

  if (event.keyCode === 38) {
    console.log("UP");
    xSpeed = 0;
    ySpeed = -1;
  }

  if (event.keyCode === 39) {
    console.log("RIGHT");
    xSpeed = 1;
    ySpeed = 0;
  }

  if (event.keyCode === 40) {
    console.log("DOWN");
    xSpeed = 0;
    ySpeed = 1;
  }
  //console.log(event);
});
