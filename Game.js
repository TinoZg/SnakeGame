const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');
const restartButton = document.getElementById('restart');
let xSpeed = 0; //speed in horizontal direction
let ySpeed = 0; //speed in vertical direction
let snake;
let food;
const speed = 1;
const gridSize = 10; //size of the grid snake moves on
const moveFreq = 10/1000; 
let timer = 1 / moveFreq;
let lastFrameTime = new Date();

function setup() {
  snake = new Snake();
  food = new Food();
  lastFrameTime = Date.now();
  requestAnimationFrame(draw);
}
/*
//return location on the grid
function snapToGrid(x){
  return Math.round(x / 10) * 10;
}
*/

function draw() {
  //set background to black
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake.show();
  timer -= (Date.now() - lastFrameTime);
  //slowing down snake speed
  lastFrameTime = Date.now();
  if(timer <= 0) {
    snake.move(xSpeed, ySpeed);
    timer = 1 / moveFreq;
  }
  snake.check();
  food.show();
  if (snake.eats(food)) {
    food.x = Grid.snapToGrid(Math.random() * (canvas.width - gridSize));
    food.y = Grid.snapToGrid(Math.random() * (canvas.height - gridSize));
   }
  if(!snake.check() && !snake.hit()) {
  requestAnimationFrame(draw);
  } else {
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("game over", canvas.width/2, canvas.height/2); 
  }
 
}

setup();


// if the key is pressed change direction of motion
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    //console.log("LEFT");
    xSpeed = -speed;
    ySpeed = 0;
  }

  if (event.keyCode === 38) {
    //console.log("UP");
    xSpeed = 0;
    ySpeed = -speed;
  }

  if (event.keyCode === 39) {
    //console.log("RIGHT");
    xSpeed = speed;
    ySpeed = 0;
  }

  if (event.keyCode === 40) {
    //console.log("DOWN");
    xSpeed = 0;
    ySpeed = speed;
  }
  //console.log(event);
});

document.getElementById("restart").addEventListener("click", function(){
  xSpeed = 0;
  ySpeed = 0;
  snake = new Snake();
  requestAnimationFrame(draw);
}); 