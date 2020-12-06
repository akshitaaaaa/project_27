class Rope{
    constructor(body1,body2,offsetX,offsetY){
    
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.Rope = Constraint.create(options)
    World.add(world, Rope)
}
attach(body){
    this.Rope.bodyA = body;
}

    display(){
    var pointA = this.Rope.bodyA.position
    var pointB = this.Rope.bodyB.position
    //fill("white")
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}