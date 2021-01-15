class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:7.8
        }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);
		ellipseMode(CENTER);
		
        ellipse(0,0,this.r, this.r);
		pop()
 }
}