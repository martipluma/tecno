let squareSize = 50;

let q =       [[true, true], 
               [true, true]];

let l =     [[true, false],
               [true, false],
               [true, true]];

let i =       [[true],
               [true],
               [true],
               [true]];

let s =       [[true, false],
               [true, true],
               [false, true]];

let t =       [[false, true, false],
               [true, true, true]]

let groc,blau,vermell,verd,magenta;

function setup() {
  createCanvas(800, 325);
  background(0);
  
  groc = color(255, 255, 0); 
  blau = color(0, 0, 255);
  vermell = color(255, 0, 0);
  verd = color(0, 255, 0);
  magenta = color(255, 0, 255);
  
}

function draw() {
  background(0);
  
  drawTetris(q, 50, 50, groc);
  drawTetris(l, 200,50, blau);
  drawTetris(i, 350,50, vermell);
  drawTetris(s, 450,50, verd);
  drawTetris(t, 600,50, magenta);
  
}

function drawTetris(figure, x, y, c) {
  let space = 8;
  strokeWeight(4);
  
  let aux = alpha(c);
  stroke(c);
  c.setAlpha(155);
  fill(c);
  c.setAlpha(aux);
  
  for (let j = 0; j < figure.length; ++j) {
    for (let k = 0; k < figure[j].length; ++k) {
      if(figure[j][k]) {
        square(k*(50 + space) + x,j*(50 + space) + y,squareSize);
      }
    }
  }
  
}