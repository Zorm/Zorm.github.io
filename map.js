


var map = function(mapData, tileSize, ctx){
  this.mapData = mapData;
  this.tileSize = tileSize;
  this.ctx = ctx;
  this.items = [];
  this.itemOffSet = 5;
  this.itemSize = 40;
}

map.prototype.addItem = function(item){
  this.items.push(item);
}

map.prototype.drawItems = function(){
  this.items.forEach(function(item){
    this.drawItem(item);
  }.bind(this));
}

map.prototype.drawItem = function(item){
  this.ctx.fillStyle = "magenta";
  this.ctx.fillRect((item.x*this.tileSize)+this.itemOffSet, (item.y*this.tileSize)+this.itemOffSet, this.itemSize, this.itemSize);
}

map.prototype.draw = function(){
  this.mapData.forEach(function(row, y){
    row.forEach(function(tile, x){
      this.drawTile(tile, y, x);
    }.bind(this));
  }.bind(this));
}

 /*var imageObj = new Image();
      imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
      };
      imageObj.src = 'tilea4.png'; */

map.prototype.drawTile = function(tile, x, y){
  var color = "grey";
  this.imageObj = new Image();
	this.imageObj.src = 'tilea4.png';

  switch(tile){
    case 0:
      color = "yellow"
      break;
    case 1:
      color = "red"
      break;
    case 2:
      color = "green"
      break;
    case 3:
      color = "blue"
      break;
    case 4:
      color = "white"
      break;
    case 5:
      color = "black"
      break;
    case 6:
      color = "purple"
	    break;
	  case 7:
      color = "cyan"
	    break;
	  case 8:
      color = "brown"
	    break;
    case 9:
      color = "green"
      break;
	case 10:
      color = "orange"
	  break;
  }
  this.ctx.fillStyle = color;
  this.imageObj.src = 'tilea4.png';
  this.imageObj.onload = function() {
        this.ctx.drawImage(this.imageObj, 69, 50);
      }.bind(this);


  //this.ctx.fillRect((x*this.tileSize)+1, (y*this.tileSize)+1, this.tileSize-1, this.tileSize-1);
  //console.log(x);
  //console.log(y);
  //console.log(tile);
  //console.log(this.tileSize);
  //console.log("done!")
}
