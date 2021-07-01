class Rope{
    constructor(bodyA, pointB,length){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0,
            length: length
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           // push();
            
            strokeWeight(10);
            stroke("white")
      
            
            line(pointA.x,pointA.y,pointB.x,pointB.y)
           
            
           // pop();
        }
    }
    
}