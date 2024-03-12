let x = 0;
let move = 3;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  if(x > width) {
     move = -15;
  }
  
  if(x < 0) {
    move = 3;
   }
 
  rect(x, 200, 40, 100);
  
  x = x + move;
}

function draw() {
  
  if(x > width) {
     move = -15;
  }
  
  if(x < 0) {
    move = 3;
   }
 
  rect(x, 100, 80, 200);
  
  x = x + move;
}