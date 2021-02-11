const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine,world;
var divisions=[];
var plinkos=[];
var particles=[];

function preload(){


}
function setup() {

 createCanvas(490,800);

 engine= Engine.create();
 world= engine.world;

ground=new Ground(245,780,490,10);

for(var d =0;d<=width;d = d+80){
  divisions.push(new Divisions(d,680,10,200));
  
}  
for(var p = 5;p<=width;p=p+40){
  plinkos.push(new Plinko(p,100,7));
}
for(var p = 5;p<=width;p=p+60){
  plinkos.push(new Plinko(p,200,7));
}
for(var p = 5;p<=width;p=p+40){
  plinkos.push(new Plinko(p,300,7));
}
for(var p = 5;p<=width;p=p+60){
  plinkos.push(new Plinko(p,400,7));
}


 //createSprite(400, 200, 50, 50);
}


//var divisionHeight= 300;

function draw() {
  background("aqua");
  Engine.update(engine);


  
  ground.display();

  textSize(50);
  fill("purple");
  text("PLINKO",140,50);

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),5,7));
  }
    
    for(var j=0;j<divisions.length;j++){
      divisions[j].display();
  
    }
    for(var k=0;k<plinkos.length;k++){
      plinkos[k].display();
  
    }
    for(var l=0;l<particles.length;l++){
      particles[l].display();
  
    }
    drawSprites();
    textSize(50)
    
  }

 
  


 // for (var k=0; k=k<=width; k=k+80 ){
 //   divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
     
  //}

