class Box{
    constructor(x,y,w,h){
        var obj={
            'restitution':1,
            'density':0.8,
            'friction':1.0
          }
    this.box=Bodies.rectangle(x,y,w,h,obj);
    this.width = w;
    this.height = h;
    World.add(world,this.box);
    
    }
    
    display(){
    var pos = this.box.position;
    var angle=this.box.angle;
    push();
    fill('white');
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    console.log(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.width);
    pop();
    }
    
}