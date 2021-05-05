class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the stone
	var options={
		restitution:0.8,
		friction:0.9,
		density:9

	}
    
		this.body=Bodies.rectangle(x, y, this.width, this.height, options)
      
        this.widht=width;
        this.height=height;
	
		World.add(world, this.body);
}   
	display()
	{
			var pos=this.body.position;		
            var angle=this.body.angle
			push()
			translate(pos.x, pos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the rectangle here to display the stone
			rect(0,0,this.width,this.height)
			pop()
	}

}