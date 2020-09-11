class Dust_bin{
    constructor(){
        var optionD = {
            isStatic:true,
        }

        this.dustBin = Bodies.rectangle(1000,600,100,20,optionD);
        this.dustBin = Bodies.rectangle(950,590,20,50,optionD);
        this.dustBin = Bodies.rectangle(1050,590,20,50,optionD);
        World.add(world, this.dustBin);
    }
    display(){
        push();
        rectMode(CENTER);
        rect(1000,600,100,20);
        rect(950,590,20,50);
        rect(1050,590,20,50);
        pop();
        }
}