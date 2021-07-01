class FixedBox{

    constructor(x,y,width,height){
        var box_Options={

        isStatic : true

        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,box_Options)


    }

    display(){
        fill("purple")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}
