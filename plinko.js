class plinko {
    constructor(x,y,radius){
      var options = {
      'density' : 1
      }
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      radius = 10;
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.radius,this.radius);
        pop(); 
    }
}