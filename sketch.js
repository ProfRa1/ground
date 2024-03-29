const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() {
    createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;

    options = {
        isStatic: true,
    };

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50);

    ground = Bodies.rectangle(250, 680, 500, 20, options);
    World.add(world, ground);
}

function draw() {
    background(51);
    Engine.update(engine);
    noStroke();
    fill("lightgreen");
    rect(ground.position.x, ground.position.y, 500, 20);
}
