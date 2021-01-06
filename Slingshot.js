class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(){
        Matter.Body.setPosition(this.bodyA , {x:200 , y:200})
        this.sling.bodyA = this.bodyA;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        stroke("red")
        line(pointA.x, pointA.y, pointB.x , pointB.y);            
    }
    
}