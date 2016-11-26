


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
  var color = "black";
  switch(tile){
    case 0:
      color = "yellow"
    case 1:
      color = "red"
    case 2:
      color = "green"
    case 3:
      color = "blue"
    case 4:
      color = "white"
    case 5:
      color = "black"
//    case 6:
//      color = "orange"
  }
  this.ctx.fillStyle = color;
  this.ctx.fillRect(x*this.tileSize, y*this.tileSize, this.tileSize, this.tileSize);
  console.log(tile);
  console.log(this.tileSize);
}
