
var gestalter = function(x, y, name, map){
	this.x = x;
	this.y = y;
	this.name = name;
	this.inventory = [];
	this.map = map;

}

gestalter.prototype.move = function(dir){
	console.log("anropar move: "+ dir);
	console.dir(this.map);
	console.dir(this.map.mapData.length-1);
	console.dir(this.map.mapData[0].length-1);
	switch(dir){
		case 'up':
			if (this.y>0){
				this.y--;
			}
		break
		case 'down':
		if (this.y<this.map.mapData.length-1){
			this.y++;
		}
		break
		case 'right':
		if (this.x<this.map.mapData[0].length-1){
			this.x++;
		}
		break
		case 'left':
		if (this.x>0){
			this.x--;
		}
		break
	}
}
