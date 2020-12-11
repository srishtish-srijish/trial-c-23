class box{
    constructor(x,y,width,height){
        var options={
            'restitution':1
        }
        this.body=Bodies.rectangle(200,100,50,50,options)
      World.add(myworld,this.body);
    }
    display(){
        var a=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(a.x,a.y,this.width,this.height)
    }
}