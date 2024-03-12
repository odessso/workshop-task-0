let x = 0;
let move = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {

  if(x > width) {
     move = -15;
  }
  
  if(x < 0) {
    move = 10;
   }
 
  rect(x, 200, 80, 200);
  
  x = x + move;
}

function draw() {
  
  if(x > width) {
     move = -15;
  }
  
  if(x < 0) {
    move = 6;
   }
 
  rect(x, 300, 80, 200);
  
  x = x + move;
}

function draw() {
  
  if(x > width) {
     move = -30;
  }
  
  if(x < 0) {
    move = 30 + 1;
   }
 
  rect(x, 300, 80, 200);
  
  x = x + move;
}