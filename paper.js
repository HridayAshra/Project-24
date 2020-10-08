class Paper{
    constructor(x,y,r){
        var optionP = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false,
        }

        this.body=Bodies.circle(x,y,r,optionP);

this.radius=r;

        World.add(world, this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
//        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius)
        pop();
    }
}