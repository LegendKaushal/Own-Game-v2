class unFixedBox {

    constructor(x,y,width,height)
    {
      var ballopts={
           density:1,
           frictionAir:0.005,
           restitution:0.5,
           isStatic:false
      }

      this.width = width
      this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,ballopts)
        World.add(world,this.body)
        
        
    }
     display(){
    
        fill("white")
        stroke("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }
    }