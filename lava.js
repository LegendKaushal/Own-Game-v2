class Lava {

    constructor(x,y,width,height,Staticness)
    {
      var ballopts={
           density:1,
           frictionAir:0.005,
           restitution:0.5,
           isStatic:Staticness
      }
      
        this.body = Bodies.rectangle(x,y,width,height,ballopts)
        World.add(world,this.body)
        
        this.width = width
        this.height = height
    }
     display(){
    
        fill("red")
        stroke("red")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }
    }