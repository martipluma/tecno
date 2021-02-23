let squareSize = 5;
let blanc;
let px = 400 - 5.5*squareSize;
let py = 400 - 4*squareSize; 
let vel = 10;

let spaceInvader =  [[0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], 
                     [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                     [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                     [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                     [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                     [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]];

function setup() {
  createCanvas(800, 800);
  strokeWeight(0);
  background(0);
  
  blanc = color(255, 255, 255); 
  col = blanc;
}

function draw() {
  background(0);
  
  if(keyIsDown(UP_ARROW)) py -= vel;
  if(keyIsDown(DOWN_ARROW)) py += vel;
  if(keyIsDown(RIGHT_ARROW)) px += vel;
  if(keyIsDown(LEFT_ARROW)) px -= vel;
  
  if(px < 0) px = width;
  else if(px > width) px = 0;
  
  if (py < 0) py = height; 
  else if(py > height) py = 0;
  
  drawTetris(spaceInvader, px, py, col);
}

function mouseClicked() {
  if (    mouseX > (px) && mouseX < (px + squareSize*11)
       && mouseY > (py) && mouseY < (py + squareSize*11)) {
    //console.log("check");
    col = color(random(255), random(255), random(255));
  }
}
function drawTetris(figure, x, y, c) {

  let space = 0;
  fill(c);
  
  for (let j = 0; j < figure.length; ++j) {
    for (let k = 0; k < figure[j].length; ++k) {
      if(figure[j][k]) {
        square(k*(squareSize + space) + x,j*(squareSize + space) + y,squareSize);
      }
    }
  }
  
}