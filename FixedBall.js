class FixedBall{

    constructor(x,y,rad){
        var ball_Options={

        isStatic : true

        }
        this.rad = rad
        this.body = Bodies.circle(x,y,rad,ball_Options)


    }

    display(){
        fill("white")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,rad)
    }

}
