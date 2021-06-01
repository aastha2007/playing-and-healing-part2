const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){

}
function setup(){
  createCanvas(1400,800)
  engine=Engine.create();
  world=engine.world;
  wall1=new Maze(700,750,300,PI/4)
}
function draw(){
  background("pink")
  Engine.update(engine);
  wall1.display();
}
