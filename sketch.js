var srithi;
var ground;
function preload(){
  
}

function setup(){
  createCanvas(500,500);
  srithi = new Level1(10,400,20,40);

  ground = new Ground(10,440,480,50);
  
}

function draw(){
  background(0);
  //rect(200,200,20,20);
  srithi.display();
  ground.display();
}