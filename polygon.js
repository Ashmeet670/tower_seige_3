class Ball{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = loadImage("polygon.png")

        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x , this.body.position.y , this.width , this.height)
    }
}