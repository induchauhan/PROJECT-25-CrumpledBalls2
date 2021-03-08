class Paper
{
    constructor(x,y,radius,angle)
    {
        var options = {
            'isStatic':false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body= Bodies.circle(x,y,radius, options);
        this.radius=radius;   
        this.image=loadImage("paper.png");    
        World.add(myworld,this.body);

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
      //  ellipseMode(RADIUS);
      //  ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}