class Flag {

    constructor(x,y,radius,image)
    {
      var ballopts={
           density:1,
           frictionAir:0.005,
           restitution:0,
           isStatic:true
      }
        this.body = Bodies.circle(x,y,radius/2,ballopts)
        World.add(world,this.body)
        this.image = image
        
        this.radius = radius
    }
     display(){
    
        fill("yellow")
        stroke("red")
        ellipse(this.body.position.x,this.body.position.y,this.radius)
        imageMode(CENTER)
     }
    }