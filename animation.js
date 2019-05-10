const canvas = document.getElementById('canvas_');
const ctx = canvas.getContext('2d');
const earth = new Image();


const bubbles = [];

function setup() {
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  for (let i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
  }
  requestAnimationFrame(draw);
}


function draw() {
  //set background to black
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const bubble of bubbles) {
    bubble.show();
    bubble.move();
  }
  ctx.drawImage(earth, 300, 300);
  requestAnimationFrame(draw);
}

setup();

document.addEventListener('keypress', (event) => {
  console.log(event);
});