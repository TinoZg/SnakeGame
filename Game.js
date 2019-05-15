const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');
let xSpeed = 0; //speed in horizontal direction
let ySpeed = 0; //speed in vertical direction
let snake;
let food;

function setup() {
  snake = new Snake();
  food = new Food();
  requestAnimationFrame(draw);
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
    food.x = floor(random(0, 40));
    food.y = floor(random(0, 40));
   }
  //continue animation
  requestAnimationFrame(draw); 
}

setup();

// if the key is pressed change direction of motion
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    //console.log("LEFT");
    xSpeed = -0.5;
    ySpeed = 0;
  }

  if (event.keyCode === 38) {
    //console.log("UP");
    xSpeed = 0;
    ySpeed = -0.5;
  }

  if (event.keyCode === 39) {
    //console.log("RIGHT");
    xSpeed = 0.5;
    ySpeed = 0;
  }

  if (event.keyCode === 40) {
    //console.log("DOWN");
    xSpeed = 0;
    ySpeed = 0.5;
  }
  //console.log(event);
});
