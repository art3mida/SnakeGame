let snake;
let scale = 20;
let score = 0;
let food;
var cnv;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

// Creating the grid
function pickLocation() {
  let cols = floor(width/scale);
  let rows = floor(height/scale);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scale);
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  snake = new Snake();
  frameRate(10);

  pickLocation();
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(51);

  // Score text.
  textSize(32);
  fill(255, 255, 255);
  text(score, 30, 30);

  if (!snake.dead) {
    snake.death();
    snake.update();
  }
  else {
    // Game over text.
    textSize(32);
    fill(255, 255, 255);
    text('GAME OVER', width/2 - 100, height/2);
  }

  snake.show();

  if (snake.eat(food)) {
    score += 10;
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, 20, 20);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.direction(0, -1);
  }
  else if (keyCode == DOWN_ARROW) {
    snake.direction(0, 1);
  }
  else if (keyCode == RIGHT_ARROW) {
    snake.direction(1, 0);
  }
  else if (keyCode == LEFT_ARROW) {
    snake.direction(-1, 0);
  }
}
