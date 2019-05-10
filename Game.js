const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');


let snake;

function setup() {
  snake = new Snake();
  requestAnimationFrame(draw);
}


function draw() {
  //set background to black
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake.show();
  snake.move();
  requestAnimationFrame(draw);
}

setup();

document.addEventListener('keypress', (event) => {
  console.log(event);
});
