const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground1
var ball , bg  ,score1 = 0, frame = 1


function preload()
{
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(930,380,380,10,"brown")

	box1 = new Boxy(830,235,50,60,"orange")
	box2 = new Boxy(880,235,50,60,"orange")
	box3 = new Boxy(930,235,50,60,"orange")
	box4 = new Boxy(980,235,50,60,"orange")
	box5 = new Boxy(1030,235,50,60,"orange")


	box6 = new Boxy(860,195,50,60,"red")
	box7 = new Boxy(910,195,50,60,"red")
	box8 = new Boxy(960,195,50,60,"red")
	box9 = new Boxy(1010,195,50,60,"red")

	box10 = new Boxy(890,155,50,60,"blue")
	box11 = new Boxy(940,155,50,60,"blue")
	box12 = new Boxy(990,155,50,60,"blue")

	box13 = new Boxy(910,115,50,60,"green")
	box14 = new Boxy(960,115,50,60,"green")

	box15 = new Boxy(935,70,50,60,"yellow")



	ball = new Ball(200,200,50,50)

	slingShot = new SlingShot(ball.body , {x:200 , y:200})



	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(bg){
	background(bg);

}
	textSize(39)
	text("Score: " + score1 , 400,100)

	

	box1.score();
	  box2.score();
	  box3.score();
	  box4.score();
	  box5.score();
	  box6.score();
	  box7.score();
	  box8.score();
	  box9.score();
	  box10.score()
	  box11.score()
	  box12.score()
	  box13.score()
	  box14.score()
	  box15.score()
	
ground1.display();
	  box1.display();
	  box2.display();
	  box3.display();
	  box4.display();
	  box5.display();
	  box6.display();
	  box7.display();
	  box8.display();
	  box9.display();
	  box10.display()
	  box11.display()
	  box12.display()
	  box13.display()
	  box14.display()
	  box15.display()

	  ball.display()
	  slingShot.display

	getBackground();


	  


}

function mouseDragged(){
	Matter.Body.setPosition(ball.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
	slingShot.fly()
}

function keyPressed(){
	if (keyCode === 32){
		slingShot.attach();
	}
}

async function getBackground(){
	var data  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
	var dataJSON = await data.json();
	var time = dataJSON.datetime
	var hour = time.slice(11,13)

	if(hour >= 06 && hour <= 19){
        bg = "black"
    }
    else{
        bg = "ligthblue"
    }


	
}