
var gestalter = function(x, y, name, map){
	this.x = x;
	this.y = y;
	this.name = name;
	this.inventory = [];
	this.map = map;

}

gestalter.prototype.move = function(direction){
	console.log("anropar move: "+ direction);
	//console.dir(this.map);
	//console.dir(this.map.mapData.length-1);
	//console.dir(this.map.mapData[0].length-1);
	switch(direction){
		case 'up':
			if (this.y>0 && this.map.mapData[this.y-1][this.x] < 24 && this.map.inEvent = false){
				this.y--;
			}
		break
		case 'down':
			if (this.y<this.map.mapData.length-1 && this.map.mapData[this.y+1][this.x] < 24 && this.map.inEvent = false){
				this.y++;
			}
		break
		case 'right':
			if (this.x<this.map.mapData[0].length-1 && this.map.mapData[this.y][this.x+1] < 24 && this.map.inEvent = false){
				this.x++;
			}
		break
		case 'left':
			if (this.x>0 && this.map.mapData[this.y][this.x-1] < 24 && this.map.inEvent = false){
				this.x--;
			}
		break
	}
	this.map.events.forEach(function(event)
	{
		if (this.x == event.x && this.y == event.y){
			this.map.onEvent(event);
		}
	}.bind(this))
}
