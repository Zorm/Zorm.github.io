


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
  //var color = "grey";
  this.imageObj = new Image();
	this.imageObj.src = 'tilea4.png';
  var tiles = [];

  switch(tile){
    case 0:
      tiles = [0*64, 32+(0*128)]
      break;
    case 1:
      tiles = [1*64, 32+(0*128)]
      break;
    case 2:
      tiles = [2*64, 32+(0*128)]
      break;
    case 3:
      tiles = [3*64, 32+(0*128)]
      break;
    case 4:
      tiles = [4*64, 32+(0*128)]
      break;
    case 5:
      tiles = [5*64, 32+(0*128)]
      break;
    case 6:
      tiles = [6*64, 32+(0*128)]
	    break;
	  case 7:
      tiles = [7*64, 32+(0*128)]
	    break;
	  case 8:
      tiles = [0*64, 32+(1*128)]
	    break;
    case 9:
      tiles = [1*64, 32+(1*128)]
      break;
	  case 10:
      tiles = [2*64, 32+(2*128)]
	  break;
  }

  this.imageObj.src = 'tilea4.png';
  this.imageObj.onload = function() {
    this.ctx.drawImage(this.imageObj, tiles[0], tiles[1], 64, 64, x*64, y*64, 64, 64);
  }.bind(this);

  //this.ctx.fillStyle = color;
  //this.ctx.fillRect((x*this.tileSize)+1, (y*this.tileSize)+1, this.tileSize-1, this.tileSize-1);
  //console.log(x);
  //console.log(y);
  //console.log(tile);
  //console.log(this.tileSize);
  //console.log("done!")
}
