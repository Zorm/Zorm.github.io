


var map = function(mapData, tileSize, ctx){
  this.mapData = mapData;
  this.tileSize = tileSize;
  this.ctx = ctx;
}

map.prototype.draw = function(){
  this.mapData.forEach(function(row, y){
    row.forEach(function(tile, x){
      this.drawTile(tile, y, x);
    }.bind(this));
  }.bind(this));
}

map.prototype.drawTile = function(tile, x, y){
  var color = "grey";
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
  this.ctx.fillRect((x*this.tileSize)+1, (y*this.tileSize)+1, this.tileSize-1, this.tileSize-1);
  //console.log(x);
  //console.log(y);
  //console.log(tile);
  //console.log(this.tileSize);
  //console.log("done!")
}
