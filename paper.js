class Paper{
    constructor(){
        var optionP = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false,
        }

        this.paper=Bodies.circle(200,200,25,optionP);
        World.add(world, this.paper);
    }
    display(){
        push();
        translate(this.paper.position.x,this.paper.position.y);
        rotate(this.paper.angle);
        ellipseMode(RADIUS);
        ellipse(200, 200, 25, 25)
        pop();
    }
}