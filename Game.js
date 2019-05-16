const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');
let xSpeed = 0; //speed in horizontal direction
let ySpeed = 0; //speed in vertical direction
let snake;
let food;
const speed = 0.2;
const gridSize = 10;

function setup() {
  snake = new Snake();
  food = new Food();
  requestAnimationFrame(draw);
}

function snapToGrid(x){
  return Math.round(x / 10) * 10;
}


function draw() {
  //set background to black
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake.show();
  snake.move(xSpeed, ySpeed);
  snake.check();
  food.show();
  if (snake.eats(food)) {
    //snake.body.push();
    food.x = Grid.snapToGrid(Math.random() * (canvas.width - gridSize));
    food.y = Grid.snapToGrid(Math.random() * (canvas.height - gridSize));
   }
  //continue animation
  requestAnimationFrame(draw); 
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
