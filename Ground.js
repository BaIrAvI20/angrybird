class Ground{
constructor(x,y,w,h){
    var pr={ isStatic:true}
    this.g=Bodies.rectangle(x,y,w,h,pr);
    this.width = w;
    this.height = h;
    World.add(world,this.g);
}

display(){
    rectMode(CENTER);
    fill("brown");
    rect(this.g.position.x,this.g.position.y,this.width,this.height);
}

}