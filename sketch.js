const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,580,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,400,60);
    stone = new Stone(400,200,30,30)
    iron  = new Iron(100,100,40,50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
 
 
}