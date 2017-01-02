
var gestalter = function(x, y, name){
	this.x = x;
	this.y = y;
	this.name = name;
	this.inventory = [];
}

gestalter.prototype.move = function(dir){
	console.log("anropar move: "+ dir);
	switch(dir){
		case 'up':
			this.y--;
		break
		case 'down':
			this.y++
		break
		case 'right':
			this.x++
		break
		case 'left':
			this.x--
		break
	}
}
