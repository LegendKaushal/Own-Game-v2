
      const Engine = Matter.Engine;
      const World= Matter.World;
      const Bodies = Matter.Bodies;
      const Constraint = Matter.Constraint;
  
      var engine, world;

      var ground,p1,B1,pickupMode,endPortal1,B2,B3,B4,jumpMode,flagPickedUpSound,clock,winner

    
function preload(){
 
  flagPlacedDownSound = loadSound("sounds/flagPlacedDownSound.wav")
  flagPickedUpSound = loadSound("flagPickedUpSound.wav")
  playerJumpSound = loadSound("sounds/playerJumpSound.wav")

  levelCompletedSound = loadSound("sounds/levelCompleted.wav")





}

function setup(){

  createCanvas(displayWidth,displayHeight)


   engine = Engine.create();
   world = engine.world;

   //Level 1
    base1 = new Ground(500,500,750,50,true)
    roof1 = new Ground(500,-100,750,50,true)

    floor1 = new Ground(500,350,250 ,50,true)
    floor2 = new Ground(700,200,50,50,true)
    floor3 = new Ground(250,200,50,50,true)

    wall1 = new Ground(100,200,50,650,true)
    wall2 = new Ground(850,200,50,650,true)

    endPortal1 = new FixedBox(500,0,50,50)

   //Level 2 
   base2 = new Ground(500,2000,500,50,true)
   roof2 =new Ground(1050,1750,1600,50,true)

   subBase1 = new Ground(775,1950,50,150,true)
   subBase2 = new Ground(850,2100,2000,50,true)
   subRoof1 = new Ground(775,1800,50,50,true)
   subRoof2 = new Ground(50,1750,300,50,true)
   lava1 =  new Lava(1275,2000,950,50,true)

   b1 = new Ground(1050,1900,50,25,false)
   r1 = new Rope(b1.body,{x:1050,y:1750},150)

   b2 = new Ground(1350,1900,50,25,false)
   r2 = new Rope(b2.body,{x:1350,y:1750},150)

   b3 = new Ground(1650,1900,50,25,false)
   r3 = new Rope(b3.body,{x:1650,y:1750},150)

   wall3 = new Ground(225,1875,50,300,true)
   wall4 = new Ground(1850,1925,50,400,true)
   wall5 = new Ground(-125,1900,50,350,true)

   //endPortal2 = new FixedBox(500,500,50,50)
   endPortal2 = new FixedBox(50,1900,50,50)

   //level 3

   base3 = new Ground(850,4000,750,50,true)


   wall6 = new Ground(450,3750,50,550,true)
   wall7 = new Ground(550,3600,50,650,true)
   wall8 = new Ground(650,3575,50,425,true)
   wall9 = new Ground(750,3600,50,250,true)
   wall10 = new Ground(850,3575,50,0,true)
   wall11 = new Ground(950,3625,50,200,true)
   wall12 = new Ground(1050,3625,50,300,true)
   wall13 = new Ground(1150,3625,50,600,true)
   wall14 = new Ground(1250,3625,50,800,true)
   wall15 = new Ground(200,3450,50,450,true)

   subRoof3 = new Ground(875,3250,800,50,true)
   subRoof4 = new Ground(900,3350,550,50,true)
   subRoof5 = new Ground(900,3450,350,50,true)
   subRoof6 = new Ground(850,3700,250,50,true)
   subRoof7 = new Ground(850,3800,450,50,true)
   subRoof8 = new Ground(850,3900,550,50,true)
   subRoof9 = new Ground(325,3650,200,50,true)
   lava2 = new Lava(325,3600,200,50,true)

   endPortal3 = new FixedBox(850,3575,50,50)
  

// level 4
   base4 =    base4 = new Ground(500,5000,1000,50,true)

  





   p1 = new Player(500,400,49)


   clock = 0
   
 
   flag = new Flag(500,300,25)
   pickupMode = false
   jumpMode = true
   clockMode = 1
   winner = 1000
   gameMode = 0

 

}


function draw(){

  Engine.update(engine)
  background("black")
  fill("white")
  textSize(20)
  text("This is ur flag  pick it up with 'e' key ",350,225)
  text("  place it up with 'f' key ",400,250)
  text("this is the end portal touch this to progress to the next level",250,50)
  text("this is lava , touch it and u will be sent back to your flag",975,1950)
  text("use your brain and ",250,3400)
  text("figure out this level",250,3425)
  text("Move Around with 'W A S D' or Arrow keys",300,600)

  textSize(100)
  text("WINNER",200,4600)
  text("This is the end 'for now'",0,5200)


textSize(25)
if(gameMode === 1){
  if(frameCount % 10 === 0){
  if(winner != 0){
    text("congratulations",p1.body.position.x + 100,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + 300,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + 500,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + 700,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + -700,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + -100,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + -300,p1.body.position.y + 100)
    text("congratulations",p1.body.position.x + -500,p1.body.position.y + 100)    
    text("congratulations",p1.body.position.x + 100,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + 300,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + 500,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + 700,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + -700,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + -100,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + -300,p1.body.position.y + 300)
    text("congratulations",p1.body.position.x + -500,p1.body.position.y + 300)   
    text("congratulations",p1.body.position.x + 100,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + 300,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + 500,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + 700,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + -700,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + -100,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + -300,p1.body.position.y + -100)
    text("congratulations",p1.body.position.x + -500,p1.body.position.y + -100)    
    text("congratulations",p1.body.position.x + 100,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + 300,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + 500,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + 700,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + -700,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + -100,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + -300,p1.body.position.y + -300)
    text("congratulations",p1.body.position.x + -500,p1.body.position.y + -300)    


  }
 }
}  



  if(clock === 10)
  {
    if(clockMode===1){

      Matter.Body.setPosition(p1.body,{x:500,y:450})
      Matter.Body.setVelocity(p1.body,{x:0,y:0})
      
    }
    if(clockMode===2){
      
    
      Matter.Body.setPosition(p1.body,{x:450,y:1950})
      Matter.Body.setVelocity(p1.body,{x:0,y:0})
    }
    if(clockMode===3){
      
      Matter.Body.setPosition(p1.body,{x:450,y:3250 })
      Matter.Body.setVelocity(p1.body,{x:0,y:0})


    }
    if(clockMode===4){
      
      Matter.Body.setPosition(p1.body,{x:500,y:4950 })
      Matter.Body.setVelocity(p1.body,{x:0,y:0})


    }
    clock = 0
  }

  resetTimer()
  


  base1.display()
  roof1.display()

  floor1.display()
  floor2.display()
  floor3 .display()

  wall1.display()
  wall2.display()


  base2.display()
  roof2.display()

  subRoof1.display()
  subRoof2.display()
  subBase1.display()
  subBase2.display()
  lava1.display()

  b1.display()
  b2.display()
  b3.display()

  wall3.display()
  wall4.display()
  wall5.display()


  base3.display()

  wall6.display()
  wall7.display()
  wall8.display()
  wall9.display()
  wall10.display()
  wall11.display()
  wall12.display()
  wall13.display()
  wall14.display()
  wall15.display()

  subRoof3.display()
  subRoof4.display()
  subRoof5.display()
  subRoof6.display()
  subRoof7.display()
  subRoof8.display()
  subRoof9.display()
  lava2.display()

  base4.display()

  
  
  p1.display()
  flag.display()
  endPortal1.display()
  endPortal2.display()
  endPortal3.display()
  camera.x = p1.body.position.x
  camera.y = p1.body.position.y

   // var collision = Matter.SAT.collides(p1.body, ground.body,ground.body); 
   //if (collision.collided) 
  // { jumpMode = true      
  // }
 //   else
   // {
     // jumpMode = false
   // }

   var collision = Matter.SAT.collides(p1.body, lava1.body,lava1.body); 
  if (collision.collided) 
   { Matter.Body.setPosition(p1.body,{x:flag.body.position.x,y:flag.body.position.y})      
   }
  else
    {
   }   
   var collision = Matter.SAT.collides(p1.body, lava2.body,lava2.body); 
   if (collision.collided) 
    { Matter.Body.setPosition(p1.body,{x:flag.body.position.x,y:flag.body.position.y})      
    }
   else
     {
    }
  

  if(pickupMode === true)
  {
    flag.body.position.x = p1.body.position.x
    flag.body.position.y = p1.body.position.y
  }

    if(p1.body.position.x > floor2.body.position.x-55&&p1.body.position.x < floor2.body.position.x+55&&p1.body.position.y > floor2.body.position.y-55&&p1.body.position.y < floor2.body.position.y+55)
  {
    Matter.Body.setStatic(floor2.body, false)
  }

  if(p1.body.position.x > endPortal1.body.position.x-55&&p1.body.position.x < endPortal1.body.position.x+55&&p1.body.position.y > endPortal1.body.position.y-55&&p1.body.position.y < endPortal1.body.position.y+55)
  {
    Matter.Body.setVelocity(p1.body,{x:0,y:0})
    Matter.Body.setPosition(p1.body, {x:500,y:1900})
    clockMode = 2
    levelCompletedSound.play()
    clock = 0
  }

  if(p1.body.position.x > endPortal2.body.position.x-55&&p1.body.position.x < endPortal2.body.position.x+55&&p1.body.position.y > endPortal2.body.position.y-55&&p1.body.position.y < endPortal2.body.position.y+55)
  {
    Matter.Body.setVelocity(p1.body,{x:0,y:0})
    Matter.Body.setPosition(p1.body, {x:500,y:3350})
    clockMode = 3
    levelCompletedSound.play()
    clock = 0
  }

  if(p1.body.position.x > endPortal3.body.position.x-55&&p1.body.position.x < endPortal3.body.position.x+55&&p1.body.position.y > endPortal3.body.position.y-55&&p1.body.position.y < endPortal3.body.position.y+55)
  {
    Matter.Body.setVelocity(p1.body,{x:0,y:0})
    Matter.Body.setPosition(p1.body, {x:500,y:4950})
    clockMode = 4
    levelCompletedSound.play()
    clock = 0
    gameMode = 1
  }



  if (keyIsDown(37) || keyIsDown(65) ) {
    Matter.Body.setPosition(p1.body,{x:p1.body.position.x-10,y:p1.body.position.y})
  }
  
  if (keyIsDown(39)||keyIsDown(68) ) {
    Matter.Body.setPosition(p1.body,{x:p1.body.position.x+10,y:p1.body.position.y})
  }



  drawSprites()
  textSize(50)
  text("Time" + clock,p1.body.position.x-650,p1.body.position.y-325)
  
}
function keyPressed(){


  if(keyCode===38||keyCode===87&&jumpMode === true){
    Matter.Body.setVelocity(p1.body,{x:0,y:-10})
    flagPickedUpSound.play()
  }
  if(keyCode===69 && p1.body.position.x < (flag.body.position.x+50)&&p1.body.position.x > (flag.body.position.x-50)&&p1.body.position.y < (flag.body.position.y+50)&&p1.body.position.y > (flag.body.position.y-50)){
    pickupMode = true
    flagPlacedDownSound.play()
  }
  if(keyCode===70){
    pickupMode = false
    flagPlacedDownSound.play()
  }
} 
function resetTimer()
{
  if(frameCount%30 === 0)
  {
    clock = clock + 1
  }
}