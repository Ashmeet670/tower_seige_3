class Boxy{
    constructor(x,y,width,height,color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.visibility = 255

        this.image = loadImage("boxyellow.png")

        this.removedonce = "false"
        this.color = color

        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)

    }

    score(){
        if (this.visibility>0 && this.visibility < 100){
            score1 = score1 + 1
        }
    }

    display(){

        

        if (this.body.speed < 10 &&  this.removedonce === "false"){
            rectMode(CENTER)
            fill(this.color)
            stroke("black")
            rect( this.body.position.x , this.body.position.y , this.width , this.height)
        }
        else{

            World.remove(world,this.body)
            this.removedonce = "true"
            push()
            this.visibility = this.visibility - 5
            tint(255,this.visibility)
            image(this.image , this.body.position.x , this.body.position.y , this.width , this.height)
            pop()
        }
        
    }
}