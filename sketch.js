
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var rope3;

var bg_img;
var fr;

var bk_song;
var sprite;
var star;
var airblow;
var air;
var starbar;
var empty;
var oneStar;
var twoStar;

function preload()
{
 bk_song = loadSound('Cutting Through Foliage.mp3');

  star = loadImage('star.png');
  air2 = loadImage('baloon2.png');
  empty = loadAnimation('empty.png');
  oneStar = loadAnimation('one_star.png');
  twoStar = loadAnimation('stars.png');

}

function setup() 
{
  createCanvas(1000,1000);
  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.2);

  engine = Engine.create();
  world = engine.world;

  //airblower

  /*airblow = createImg('baloon2.png');
  airblow.position(300,350);
  airblow.size(120,120);
  airblow.mouseClicked(balloon);*/
  


  //star1
star1 = createSprite(300,40);
star1.addImage(star);
star1.scale = 0.01

  //star2
  star2 = createSprite(30,300);
  star2.addImage(star);
  star2.scale = 0.01

  //starbar
  starbar = createSprite(50,20);
  starbar.addAnimation('empty',empty);
  starbar.addAnimation('one',oneStar);
  starbar.addAnimation('two',twoStar);

  starbar.changeAnimation('empty');
  starbar.scale = 0.2;

  

 
   rope = new Rope(7,{x:120,y:90});
   rope2 = new Rope(7,{x:480,y:90});


  /*mute_btn = createImg('mute.png');
  mute_btn.position(width-60,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);*/
  
  ground = new Ground(300,height,width,20);
  blink.frameDelay = 20;
  eat.frameDelay = 20;

 /* bunny = createSprite(200,height-80,100,100);
  bunny.scale = 0.2;

  bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');

  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);*/

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();

  Engine.update(engine);
  ground.show();

  drawSprites();

 /* if(collide(fruit,bunny)==true)
  {
    World.remove(engine.world,fruit);
    fruit = null;
    bunny.changeAnimation('eating');
    eating_sound.play();
  }

  if(collide(fruit,star1)==true)
  {
    star1.visible = false;
    starbar.changeAnimation('one');
   
  }
  if(collide(fruit,star2)==true)
  {
    star2.visible = false;
    starbar.changeAnimation('two');
   
  }

  if(fruit!=null && fruit.position.y>=650)
  {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit=null;
   }*/
  
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


function mute()
{
  if(bk_song.isPlaying())
     {
      bk_song.stop();
     }
     else{
      bk_song.play();
     }
}
function balloon()
{
Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.05});
air.play();

}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

