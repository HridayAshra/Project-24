class Ground{
    constructor(){
        var optionG = {
            isStatic:true,
        }

        this.ground = Bodies.rectangle(width/2,732,width,height,optionG);
        World.add(world, this.ground);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(width/2,height-35,width,20);
        pop();
        }
}