
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;

var box1

function setup() {
var canvas=createCanvas(1000,800);
 
myengine = Engine.create();
myworld = myengine.world;
box1=new box;
}

function draw() {
background(0); 
Engine.update(myengine);
box1.display();
 
}