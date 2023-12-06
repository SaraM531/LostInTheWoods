function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(120,30,150);
  
  // This is the hair
  fill(50,100,255);
  ellipse(100,200,200,200);
  
  fill(200,0,0);
  ellipse(155,100,200,200);

  fill(220,180,0);
  ellipse(300,99,200,200);
   
  fill(0,130,0);
  ellipse(400,200,200,200);
  
  // This is the face circle
  fill(255,255,255);
  stroke(0,0,0);
  strokeWeight(5);
  ellipse(250,247,350,350);
  
  
  //This is the mouth
  noFill();
  curve(300,10,150,320,350,320,100,30);
  
  
  // This is the black part of the eye
  fill(0);
  ellipse(150,200,70,70);
  ellipse(350,200,70,70);
  
  // This is the grey part of the eye
  fill(200,200,200);
  ellipse(150,193,40);
  ellipse(348,193,40);

  // This is the nose
  fill(255,0,0);
  stroke(150,50,20);
  ellipse(250,260,100);
  if(mouseIsPressed) {
    fill (20,80,240);
    stroke(0,50,200);
    ellipse (250,260,100);
  }
    
  // This is the nose shine
  fill(255,200,200);
  noStroke();
  ellipse(230,250,40);
  if(mouseIsPressed) {
    fill (200,200,250);
    noStroke();
    ellipse (230,250,40);
  }
  
  //The text
  textSize(40);
  fill(255,150,230)
  text('Press my nose!',120,470);
  
}